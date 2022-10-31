import { useContext } from 'react';
import { ViewportHeightContext } from 'ui-kit/ViewportHeightProvider';

const useViewportHeight = () => useContext(ViewportHeightContext);

export default useViewportHeight;
