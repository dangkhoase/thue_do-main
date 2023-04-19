import classNames from 'classnames/bind';
import { SearchIcon } from '~/components/Icons';
import styles from './User.module.scss';




const cx = classNames.bind(styles);
export default function User() {
    return (
        <>
            <div className={cx('search')}>
                <input
                    placeholder="Tìm kiếm..."
                    spellCheck={false}
                />
                <button className={cx('search-btn')}>
                    <SearchIcon />

                </button>
            </div>
        </>
    );
}