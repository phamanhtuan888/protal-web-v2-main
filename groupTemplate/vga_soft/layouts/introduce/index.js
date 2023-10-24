import { connect } from 'react-redux';
import dynamic from 'next/dynamic';

const RenderTemplatesCategory = dynamic(() => import('@/groupTemplate'), {
  ssr: true,
  loading: () => null,
});

const GioiThieu = ({ dataSite, dataResult }) => (
  <div className="page-container">
    {dataResult?.children &&
      dataResult?.children.length > 0 &&
      dataResult?.children.map(
        (item) => <RenderTemplatesCategory {...item} data={[item?.modifedCategory]} dataSite={dataSite} key={item?.id} />, // add key
      )}
  </div>
);

export default connect()(GioiThieu);
