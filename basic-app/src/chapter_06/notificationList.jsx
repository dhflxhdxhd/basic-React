import React from "react";
import Notification from "./notification";

const reservedNotifications = [
    {
        message: "오늘의 날씨를 알려드립니다."
    },
    {
        message: "곧 출근할 시간입니다."
    },
    {
        message: "공부를 시작하십시오."
    },
];

var timer;

class NotificationList extends React.Component {
    constructor(props){
        super(props);

        // notificationList : notification component를 목록 형태로 보여주기 위한 component
        // notification이라는 이름의 빈 배열을 state에 넣음
        // constructor에서는 앞으로 사용할 데이터를 state에 넣어서 초기화
        this.state = {notification: [],};
    }

    componentDidMount(){
        const { notifications } = this.state;

        timer = setInterval(() => {
            if (notifications.length < reservedNotifications.length){
                const index = notifications.length;
                notifications.push(reservedNotifications[index]);
                // state를 업데이트하기 위해 setState 필수
                this.setState({
                    notifications: notifications,
                });
                
            }else{
                clearInterval(timer);
            }   
        }, 1000);
    }

    render(){
        return (
            <div>

                {this.state.notifications.map((notification) => {
                    
                    return <Notification message={notification.message} />
                })}
            </div>
        );
    }
}

export default NotificationList;