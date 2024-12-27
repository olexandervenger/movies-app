import { Pagination } from 'antd';
import styles from './styles.module.css';

export interface IAppFooterPorps {
  current: number;
  defaultCurrent: number;
  onChangeCurrentPage: (page: number, pageSize?: number) => void;
}

const AppFooter: React.FC<IAppFooterPorps> = (props) => {
  
  return (
    <footer className={styles.appFooter} >
      <div className={styles.containerPagination}>
        <Pagination 
          current={props.current}
          defaultCurrent={props.defaultCurrent}
          onChange={props.onChangeCurrentPage}
          total={500}
        />
      </div>
    </footer>
  )
}

export default AppFooter;