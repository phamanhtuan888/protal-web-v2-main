/* eslint-disable import/extensions */
// import io from 'socket.io-client';
import _ from 'lodash';
import cookie from 'js-cookie';
// import CONFIG from '@/utils/config';

export default function runSocket(dispatch, currentUser, socket) {
//   const socket =
//     cookie.get('token') &&
//     io.connect(
//       `${CONFIG.SOCKET_IO}?token=${cookie.get('token')}`,
//       {
//         reconnectionDelay: 500,
//         timeout: 2000,
//         reconnectionAttempts: 10,
//         forceNew: true,
//       }
//     );

  socket.emit('joinChat', {
    usersId: cookie.get('usersId'),
    chatRange: [0, 6],
    range: [0, 6],
  });

  socket.on('connect', () => {
    // Mail v2
    // ĐÓN NHẬN NOTIFY : Nhận thông báo về mail (số tin chưa đọc)
    socket.on('mailDetail', data => {
      // console.log('mailDetail data', data);
      dispatch({
        type: 'emailSocket/handleCountUnreadMail',
        payload: {
          type: 'initial',
          number: Number(data.totalUnread || 0),
        },
      });
    });
    // ĐÓN NHẬN NOTIFY : Lấy hộp thư đến
    socket.on('inboxMail', data => {
      // console.log('inboxMail data', data);
      dispatch({
        type: 'emailSocket/fetchEmail',
        payload: data,
      });
    });
    // ĐÓN NHẬN NOTIFY : Lấy hộp thư đi
    socket.on('outboxMail', data => {
      // console.log('outboxMail data', data);
      dispatch({
        type: 'emailSocket/fetchEmailSended',
        payload: data,
      });
    });
    // ĐÓN NHẬN NOTIFY : Lấy các mail trong 1 room
    socket.on('mailsOfRoom', data => {
      // console.log('mailsOfRoom data', data);
      dispatch({
        type: 'emailSocket/detailMail',
        payload: data,
      });
    });
    // ĐÓN NHẬN NOTIFY : Xóa mail thành công
    socket.on('removeMailNotify', data => {
      // console.log('removeMailNotify data', data);
      dispatch({
        type: 'emailSocket/removeEmalSucces',
        payload: data,
      });
    });
    // ĐÓN NHẬN NOTIFY : Gửi mail -> báo succes cho người gửi
    socket.on('sendMailSuccesFully', () => {
      // console.log('sendMailSuccesFully data', data);
      dispatch({
        type: 'emailSocket/loading',
        payload: false,
      });
    });
    // ĐÓN NHẬN NOTIFY : Gửi mail -> báo succes cho người nhận
    socket.on('nhanThu', data => {
      console.log('nhanThu... data', data);
      dispatch({
        type: 'emailSocket/notifySendEmailToUser',
        payload: data,
      });
    });
    // socket.on('receiveMails', (data) => {
    //   console.log('receiveMails... data', data);
    //   dispatch({
    //     type: 'emailSocket/notifySendEmailToUser',
    //     payload: data
    //   })
    // });
    // ĐÓN NHẬN NOTIFY : Đón nhận user vừa đọc mail
    socket.on('seenMailSuccesFully', data => {
      // console.log('seenMailSuccesFully data', data);
      dispatch({
        type: 'emailSocket/readMail',
        payload: data,
      });
    });

    socket.on('messageDetail', data => {
      dispatch({
        type: 'customersChat/setDataChatList',
        payload: data,
      });
      // console.log('messageDetail', data);
    });
    socket.on('receiveGetRoomsOfUsers', data => {
      dispatch({
        type: 'chatbox/capnhatdanhsachchat',
        payload: data,
      });

      // console.log('receiveGetRoomsOfUsers', data);
    });
    socket.on('receiveListMessage', data => {
      dispatch({
        type: 'chatbox/capnhatchitietchat',
        payload: data,
      });

      dispatch({
        type: 'customersChat/truyendataPopup',
        payload: data,
      });
      const lastMessage =
        _.orderBy(data?.message?.list, ['dateCreated'], ['asc'])?.length > 0 &&
        _.orderBy(data?.message?.list, ['dateCreated'], ['desc'])[0];
      if (lastMessage?.id) {
        // console.log(lastMessage?.id);
        socket.emit('seenMessage', {
          roomChatsId: data?.roomChats?.id,
          usersId: currentUser.id,
          lastReadedMessageId: lastMessage?.id,
        });
      }
      // console.log('receiveListMessage', data);
    });
    socket.on('sendMessageSuccesFully', data => {
      if (data?.succes) {
        dispatch({
          type: 'chatbox/addtinnhanmoi',
          payload: data,
        });

        dispatch({
          type: 'customersChat/guitinmoi',
          payload: data,
        });
      }
      // console.log('sendMessageSuccesFully', data);
    });
    socket.on('receiveMessage', data => {
      dispatch({
        type: 'chatbox/addtinnhanmoiNhan',
        payload: data,
      });
      dispatch({
        type: 'customersChat/nhantinmoi',
        payload: data,
      });
      // console.log('receiveMessage', data);
    });
    socket.on('viewedNotifications', data => {
      dispatch({
        type: 'chatbox/capnhatdaxem',
        payload: data,
      });

      dispatch({
        type: 'customersChat/readtin',
        payload: data,
      });
      // console.log('viewedNotifications', data);
    });
  });

}
