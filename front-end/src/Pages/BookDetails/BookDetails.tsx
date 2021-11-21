import { StarOutlined } from "@ant-design/icons";
import { Avatar, Button, Layout, List, Image, Breadcrumb, Divider, Card, Descriptions } from "antd";
import Meta from "antd/lib/card/Meta";
import { Content, Footer, Header } from "antd/lib/layout/layout";
import Sider from "antd/lib/layout/Sider";
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { bindActionCreators } from "redux";
import * as actionCreators from 'src/State/ActionCreator';
import { State } from "src/State/Reducers";
import "./Styles.css";

export const BookDetails = () => {

    const dispatch = useDispatch();
    const { fetchBook } = bindActionCreators(actionCreators, dispatch);
    const book = useSelector((state: State) => state.books.selectedBook);

    useEffect(() => {
      if(!book) {
        const bookId = window.location.pathname.split('/')[2];
        fetchBook((+bookId!));
      }
      }, [book]);

    return (
      <>
      <Breadcrumb>
    <Breadcrumb.Item><Link to="/books/list">Books list</Link></Breadcrumb.Item>
    <Breadcrumb.Item>
      {book?.title}
    </Breadcrumb.Item>
    </Breadcrumb>
    <Divider />

<div className="book-details-wrapper">
  <div className="book-details-image"><Image
      width={200}
      src={book?.formats["image/jpeg"]}
    /></div>
  <div className="book-details-desc">
  <Descriptions title={book?.title} bordered column={3}>
    <Descriptions.Item label="Authers">{book?.authors.map(auth => `${auth.name} (${auth.birth_year}-${auth.death_year})`).join(', ')}</Descriptions.Item>
    <Descriptions.Item label="Languages">{book?.languages.map(lang => lang).join(', ')}</Descriptions.Item>
    <Descriptions.Item label="Copyright">{book?.copyright ? 'YES' : 'NO'}</Descriptions.Item>
    <Descriptions.Item label="Bookshelves" span={2}>{book?.bookshelves.map(bs => bs).join(', ')}</Descriptions.Item>
    <Descriptions.Item label="Download count">{book?.download_count}</Descriptions.Item>
    <Descriptions.Item label="Subjects">{book?.subjects.map(sub => sub).join(', ')}</Descriptions.Item>
  </Descriptions>
  </div>
</div>
    
    </>
    )
}