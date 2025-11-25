export type ItemFn = () => Promise<any>;

type ItemWrapperObj = {
  fn: ItemFn;
  id?: string;
};

type StatsObj = {
  item: ItemWrapperObj | null;
  time: number;
};

type FailedItemsArray = Array<string | undefined>;

type OnFinishListener = ({
  min,
  max,
  avg,
  settledCount,
  totalDuration,
  realRate,
  failedItems,
}: {
  min: StatsObj;
  max: StatsObj;
  avg: number;
  settledCount: number;
  totalDuration: number;
  realRate: number;
  failedItems: FailedItemsArray;
}) => void;

export const createQueue = ({rateLimit = 25}: {rateLimit: number}) => {

  let startTime: number | null = null;
  let min: StatsObj = {
    item: null,
    time: Infinity,
  };
  let max: StatsObj = {
    item: null,
    time: -Infinity,
  };
  let averageSum = 0;
  let settledCount = 0;
  let failedItems: FailedItemsArray = [];

  let queuedItems: Array<ItemWrapperObj> = [];
  let runningItems: Array<ItemWrapperObj> = [];
  let intervalHandle: ReturnType<typeof setInterval> | null = null;
  const onFinishListeners: OnFinishListener[] = [];

  const onFinish = (fn: OnFinishListener) => {
    onFinishListeners.push(fn);
  };

  const addToQueue = (fn: ItemFn, id?: string) => {
    if (!startTime) {
      startTime = performance.now();
    }
    queuedItems.push({
      fn,
      id,
    });
    processQueue();
  };

  const doProcessTick = () => {
    // console.log('processing');

    if (queuedItems.length === 0) {
      // console.log('no more items to enqueue, stopping interval checks');
      if (intervalHandle) {
        clearInterval(intervalHandle);
        intervalHandle = null;
      }
      if (runningItems.length === 0) {
        console.log('onFinish!');
        onFinishListeners.forEach((fn) => {
          const totalDuration = performance.now() - (startTime || 0);
          fn({
            min,
            max,
            avg: averageSum / settledCount,
            settledCount: settledCount,
            totalDuration,
            realRate: settledCount / (totalDuration / 1000),
            failedItems,
          });
        });
      }
    } else if (runningItems.length === rateLimit) {
      // console.log(`Parallelization is full (${runningItems.length}), skipping`);
      return;
    } else {
      console.log('Adding to running items');
      const itemWrapper = queuedItems.shift() as ItemWrapperObj;
      runningItems.push(itemWrapper);
      const startItemTime = performance.now();
      itemWrapper
        .fn()
        .catch((reason) => {
          console.log('Item', itemWrapper.id, 'failed', reason);
          failedItems.push(itemWrapper.id);
        })
        .finally(() => {
          const finishItemTime = performance.now();
          const timeTaken = finishItemTime - startItemTime;
          console.log('Item', itemWrapper.id, 'took', timeTaken, 'ms');

          if (timeTaken < min.time) {
            min = {
              item: itemWrapper,
              time: timeTaken,
            };
          }

          if (timeTaken > max.time) {
            max = {
              item: itemWrapper,
              time: timeTaken,
            };
          }

          averageSum += timeTaken;
          settledCount += 1;

          // Remove item from runningItems
          runningItems = runningItems.filter((i) => i !== itemWrapper);
          processQueue();
        });
    }
  };

  const processQueue = () => {
    if (intervalHandle === null) {
      // console.log('Setting interval handle');
      intervalHandle = setInterval(doProcessTick, 1000 / rateLimit);
    } else {
      // console.log('Interval handle already exists, do nothing');
    }
  };

  return {
    onFinish,
    addToQueue,
  };
};
