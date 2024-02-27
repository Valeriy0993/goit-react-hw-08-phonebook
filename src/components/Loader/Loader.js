import { Circles } from 'react-loader-spinner';

const Loader = () => (
  <div>
    <Circles
      height="80"
      width="80"
      color="#585757"
      ariaLabel="circles-loading"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
    />
  </div>
);

export default Loader;
