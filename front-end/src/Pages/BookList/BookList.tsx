import { StarOutlined } from "@ant-design/icons";
import { Avatar, Button, List, Select, Skeleton } from "antd";
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { bindActionCreators } from "redux";
import * as actionCreators from 'src/State/ActionCreator';
import { State } from "src/State/Reducers";
import "./Styles.css";

export const BookList = () => {

    const dispatch = useDispatch();
    const { fetchBooks, booksSelected } = bindActionCreators(actionCreators, dispatch);
    const books = useSelector((state: State) => state.books.books);
    const isLoading = useSelector((state: State) => state.books.isLoading);
    const [ selectedKeywords, setSelectedKeywords ] = useState<any>([]);

    const search = () => {
      if(selectedKeywords.length > 0) {
        const queryParams = `search=${selectedKeywords.join('%20')}`;
        fetchBooks(queryParams, true);
      } else {
        fetchBooks('', true)
      }
      
    };
    const loadMore =
      !isLoading ? (
        <div
          style={{
            textAlign: 'center',
            marginTop: 12,
            height: 32,
            lineHeight: '32px',
          }}
        >
          <Button onClick={e => fetchBooks(books?.next.split("?").pop())}>loading more</Button>
        </div>
      ) : null;

    useEffect(() => {
      if(!books) {
        fetchBooks('');
      }
      }, [books?.next]);
    return (
      <>
      <div className="search-box">
        <div className="box"><Select
    mode="tags"
    style={{ width: '100%' }}
    placeholder="search books by keyword, For example: dickens, great includes Great Expectations by Charles Dickens"
    onChange={e => setSelectedKeywords(e)}
  ></Select></div>
  <div className="button">
      <Button type="primary" onClick={search}>Search</Button>
  </div>
      
      </div>
      <List
      className="demo-loadmore-list"
      loading={isLoading}
      itemLayout="horizontal"
      loadMore={loadMore}
      dataSource={books?.results}
      renderItem={item =>
        (
          <List.Item
            actions={[<StarOutlined title="mark as favorite" />, <Link to={`/books/${item.id}/details`} onClick={e => booksSelected(item.id)}>show more..</Link>]}
          >
            <Skeleton avatar title={false} loading={false} active>
              <List.Item.Meta
                avatar={<Avatar shape="square" src={item.formats["image/jpeg"]} />}
                title={<Link to={`/books/${item.id}/details`} onClick={e => booksSelected(item.id)}>{item.title}</Link>}
                description={`Authers: ${item.authors.map(auth => auth.name).join(', ')}`}
              />
            </Skeleton>
          </List.Item>
        )
      }
    />
    </>
    )
}