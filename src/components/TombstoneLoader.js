import React from 'react';

/**
 * @TombstoneLoader
 *
 * Placeholder component that takes up the entire height and width
 * of it's parent and presents an animated tombstone box.
 *
 * ```typescript
 * import {TombstoneLoader} from '@ion/dls/src/components/loading';
 *
 * <TombstoneLoader />
 *
 * ```
 *
 */
export const TombstoneLoader = () => (
  <div className='tombstone-loader'>
    <span className='tombstone-loader-background' />
  </div>
);

export default TombstoneLoader;
