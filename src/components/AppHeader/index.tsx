import { Pagination } from 'antd';
import { Typography } from 'antd';
import styles from './styles.module.css';
export interface IAppHeaderPorps {
  current: number;
  defaultCurrent: number;
  onChangeCurrentPage: (page: number, pageSize?: number) => void;
}

const AppHeader: React.FC<IAppHeaderPorps> = (props) => {
  
  return (
    <header className={styles.appHeader} >
      <Typography.Title className={styles.tilte}>
        TOP MOVIES
      </Typography.Title>
      <div className={styles.containerPagination}>
        <Pagination 
          current={props.current}
          defaultCurrent={props.defaultCurrent}
          onChange={props.onChangeCurrentPage}
          total={500}
        />
      </div>
    </header>
  )
}

export default AppHeader;