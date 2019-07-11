import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail'
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className=  "ui container comments">
            <ApprovalCard> 
                <CommentDetail author="Sam" timeAgo="Today at 4:45PM" body="So Mesmerizing" avt={faker.image.avatar()}/>
           </ApprovalCard>
           <ApprovalCard>
                <CommentDetail author="Alex" timeAgo="Today at 2:5PM" body="Makes me remember H.P" avt={faker.image.avatar()}/>
           </ApprovalCard>
           <ApprovalCard>
                <CommentDetail author="Jane" timeAgo="Yesterday at 1:00PM" body="Such a nice meme!" avt={faker.image.avatar()}/>
           </ApprovalCard>
        </div>
    )
}

ReactDOM.render(<App />, document.querySelector('#root'))