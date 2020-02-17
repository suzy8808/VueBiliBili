<script>
import EventCard from '@/components/EventCard.vue'
export default {
  name: 'EventComponent',
  components: {
    EventCard
  },
  data: function () {
    return {
      user: {
        nickName: '道乐菌',
        headPicture: require('../assets/img/head_picture.jpg'),
        level: 4,
        attention: 444,
        fans: 444,
        works: 444,
        manifesto: '吃吃吃买买买出去浪 视频分类请看收藏夹 老丸子没事干交流会：733749659 微博/微信：柴犬老丸子'
      },
      events: [
        { talk: '转发动态', createTime: '20191111101010', type: 1, content: '今晚九点半直播，直播间4288035，尬聊和吃宵夜。今晚想吃三倍辣火鸡面！转发本动态抽两位柴神爷，每人一包三倍辣，不能我一个人炸。', work: { img: require('../assets/img/card.png'), name: '超级牛逼的作品', watch: 1, forward: 29085, comment: 948, like: 9999 } },
        { talk: '转发动态',
          createTime: '20191111101010',
          type: 2,
          content: '今晚九点半直播，直播间4288035，尬聊和吃宵夜。今晚想吃三倍辣火鸡面！转发本动态抽两位柴神爷，每人一包三倍辣，不能我一个人炸。',
          work: {
            author: { nickName: '柴犬老丸子',
              headPicture: require('../assets/img/head_picture.jpg'),
              level: 4,
              attention: 444,
              fans: 444,
              manifesto: '吃吃吃买买买出去浪 视频分类请看收藏夹 老丸子没事干交流会：733749659 微博/微信：柴犬老丸子'
            },
            img: require('../assets/img/card.png'),
            name: '超级牛逼的作品',
            watch: 1,
            forward: 29085,
            comment: 948,
            commentList: [
              {
                user: {
                  nickName: '巨大住',
                  headPicture: require('../assets/img/head_picture.jpg'),
                  level: 4
                },
                content: '要是我中了一等奖给点赞的朋友一人一杯奶茶还有把你们和柴犬发的视频一一点赞',
                createTime: '20191127223030',
                like: 188,
                dislike: 10,
                comment2List: [
                  {
                    fromUser: {
                      nickName: '霸霸',
                      headPicture: require('../assets/img/head_picture.jpg'),
                      level: 3
                    },
                    toUser: {
                      nickName: '欻欻'
                    },
                    content: '倒贴是不可能的，因为我是非洲人',
                    createTime: '20191128223030',
                    like: 158,
                    dislike: 10 },
                  {
                    fromUser: {
                      nickName: '霸霸',
                      headPicture: require('../assets/img/head_picture.jpg'),
                      level: 3
                    },
                    toUser: {
                      nickName: '欻欻'
                    },
                    content: '倒贴是不可能的，因为我是非洲人',
                    createTime: '20191128223030',
                    like: 158,
                    dislike: 10 },
                  {
                    fromUser: {
                      nickName: '霸霸',
                      headPicture: require('../assets/img/head_picture.jpg'),
                      level: 3
                    },
                    toUser: {
                      nickName: '欻欻'
                    },
                    content: '倒贴是不可能的，因为我是非洲人',
                    createTime: '20191128223030',
                    like: 158,
                    dislike: 10 },
                  {
                    fromUser: {
                      nickName: '霸霸',
                      headPicture: require('../assets/img/head_picture.jpg'),
                      level: 3
                    },
                    toUser: {
                      nickName: '欻欻'
                    },
                    content: '倒贴是不可能的，因为我是非洲人',
                    createTime: '20191128223030',
                    like: 158,
                    dislike: 10 },
                  {
                    fromUser: {
                      nickName: '霸霸',
                      headPicture: require('../assets/img/head_picture.jpg'),
                      level: 3
                    },
                    toUser: {
                      nickName: '欻欻'
                    },
                    content: '倒贴是不可能的，因为我是非洲人',
                    createTime: '20191128223030',
                    like: 158,
                    dislike: 10 },
                  {
                    fromUser: {
                      nickName: '霸霸',
                      headPicture: require('../assets/img/head_picture.jpg'),
                      level: 3
                    },
                    toUser: {
                      nickName: '欻欻'
                    },
                    content: '倒贴是不可能的，因为我是非洲人',
                    createTime: '20191128223030',
                    like: 158,
                    dislike: 10 },
                  {
                    fromUser: {
                      nickName: '霸霸',
                      headPicture: require('../assets/img/head_picture.jpg'),
                      level: 3
                    },
                    toUser: {
                      nickName: '欻欻'
                    },
                    content: '倒贴是不可能的，因为我是非洲人',
                    createTime: '20191128223030',
                    like: 158,
                    dislike: 10 },
                  {
                    fromUser: {
                      nickName: '霸霸',
                      headPicture: require('../assets/img/head_picture.jpg'),
                      level: 3
                    },
                    toUser: {
                      nickName: '欻欻'
                    },
                    content: '倒贴是不可能的，因为我是非洲人',
                    createTime: '20191128223030',
                    like: 158,
                    dislike: 10 },
                  {
                    fromUser: {
                      nickName: '霸霸',
                      headPicture: require('../assets/img/head_picture.jpg'),
                      level: 3
                    },
                    toUser: {
                      nickName: '欻欻'
                    },
                    content: '倒贴是不可能的，因为我是非洲人',
                    createTime: '20191128223030',
                    like: 158,
                    dislike: 10 },
                  {
                    fromUser: {
                      nickName: '霸霸',
                      headPicture: require('../assets/img/head_picture.jpg'),
                      level: 3
                    },
                    toUser: {
                      nickName: '欻欻'
                    },
                    content: '倒贴是不可能的，因为我是非洲人',
                    createTime: '20191128223030',
                    like: 158,
                    dislike: 10 },
                  {
                    fromUser: {
                      nickName: '霸霸',
                      headPicture: require('../assets/img/head_picture.jpg'),
                      level: 3
                    },
                    toUser: {
                      nickName: '欻欻'
                    },
                    content: '倒贴是不可能的，因为我是非洲人',
                    createTime: '20191128223030',
                    like: 158,
                    dislike: 10 },
                  {
                    fromUser: {
                      nickName: '霸霸',
                      headPicture: require('../assets/img/head_picture.jpg'),
                      level: 3
                    },
                    toUser: {
                      nickName: '欻欻'
                    },
                    content: '倒贴是不可能的，因为我是非洲人',
                    createTime: '20191128223030',
                    like: 158,
                    dislike: 10 },
                  {
                    fromUser: {
                      nickName: '霸霸',
                      headPicture: require('../assets/img/head_picture.jpg'),
                      level: 3
                    },
                    toUser: {
                      nickName: '欻欻'
                    },
                    content: '倒贴是不可能的，因为我是非洲人',
                    createTime: '20191128223030',
                    like: 158,
                    dislike: 10 },
                  {
                    fromUser: {
                      nickName: '霸霸',
                      headPicture: require('../assets/img/head_picture.jpg'),
                      level: 3
                    },
                    toUser: {
                      nickName: '欻欻'
                    },
                    content: '倒贴是不可能的，因为我是非洲人',
                    createTime: '20191128223030',
                    like: 158,
                    dislike: 10 },
                  {
                    fromUser: {
                      nickName: '霸霸',
                      headPicture: require('../assets/img/head_picture.jpg'),
                      level: 3
                    },
                    toUser: {
                      nickName: '欻欻'
                    },
                    content: '倒贴是不可能的，因为我是非洲人',
                    createTime: '20191128223030',
                    like: 158,
                    dislike: 10 }
                ]
              },
              {
                user: {
                  nickName: '巨大住',
                  headPicture: require('../assets/img/head_picture.jpg'),
                  level: 4
                },
                content: '要是我中了一等奖给点赞的朋友一人一杯奶茶还有把你们和柴犬发的视频一一点赞',
                createTime: '20191128223030',
                like: 158,
                dislike: 10,
                comment2List: [
                  {
                    fromUser: {
                      nickName: '霸霸',
                      headPicture: require('../assets/img/head_picture.jpg'),
                      level: 3
                    },
                    toUser: {
                      nickName: '欻欻'
                    },
                    content: '倒贴是不可能的，因为我是非洲人',
                    createTime: '20191128223030',
                    like: 158,
                    dislike: 10 },
                  {
                    fromUser: {
                      nickName: '霸霸',
                      headPicture: require('../assets/img/head_picture.jpg'),
                      level: 3
                    },
                    toUser: {
                      nickName: '欻欻'
                    },
                    content: '倒贴是不可能的，因为我是非洲人',
                    createTime: '20191128223030',
                    like: 158,
                    dislike: 10 },
                  {
                    fromUser: {
                      nickName: '霸霸',
                      headPicture: require('../assets/img/head_picture.jpg'),
                      level: 3
                    },
                    toUser: {
                      nickName: '欻欻'
                    },
                    content: '倒贴是不可能的，因为我是非洲人',
                    createTime: '20191128223030',
                    like: 158,
                    dislike: 10 },
                  {
                    fromUser: {
                      nickName: '霸霸',
                      headPicture: require('../assets/img/head_picture.jpg'),
                      level: 3
                    },
                    toUser: {
                      nickName: '欻欻'
                    },
                    content: '倒贴是不可能的，因为我是非洲人',
                    createTime: '20191128223030',
                    like: 158,
                    dislike: 10 },
                  {
                    fromUser: {
                      nickName: '霸霸',
                      headPicture: require('../assets/img/head_picture.jpg'),
                      level: 3
                    },
                    toUser: {
                      nickName: '欻欻'
                    },
                    content: '倒贴是不可能的，因为我是非洲人',
                    createTime: '20191128223030',
                    like: 158,
                    dislike: 10 },
                  {
                    fromUser: {
                      nickName: '霸霸',
                      headPicture: require('../assets/img/head_picture.jpg'),
                      level: 3
                    },
                    toUser: {
                      nickName: '欻欻'
                    },
                    content: '倒贴是不可能的，因为我是非洲人',
                    createTime: '20191128223030',
                    like: 158,
                    dislike: 10 },
                  {
                    fromUser: {
                      nickName: '霸霸',
                      headPicture: require('../assets/img/head_picture.jpg'),
                      level: 3
                    },
                    toUser: {
                      nickName: '欻欻'
                    },
                    content: '倒贴是不可能的，因为我是非洲人',
                    createTime: '20191128223030',
                    like: 158,
                    dislike: 10 },
                  {
                    fromUser: {
                      nickName: '霸霸',
                      headPicture: require('../assets/img/head_picture.jpg'),
                      level: 3
                    },
                    toUser: {
                      nickName: '欻欻'
                    },
                    content: '倒贴是不可能的，因为我是非洲人',
                    createTime: '20191128223030',
                    like: 158,
                    dislike: 10 },
                  {
                    fromUser: {
                      nickName: '霸霸',
                      headPicture: require('../assets/img/head_picture.jpg'),
                      level: 3
                    },
                    toUser: {
                      nickName: '欻欻'
                    },
                    content: '倒贴是不可能的，因为我是非洲人',
                    createTime: '20191128223030',
                    like: 158,
                    dislike: 10 },
                  {
                    fromUser: {
                      nickName: '霸霸',
                      headPicture: require('../assets/img/head_picture.jpg'),
                      level: 3
                    },
                    toUser: {
                      nickName: '欻欻'
                    },
                    content: '倒贴是不可能的，因为我是非洲人',
                    createTime: '20191128223030',
                    like: 158,
                    dislike: 10 },
                  {
                    fromUser: {
                      nickName: '霸霸',
                      headPicture: require('../assets/img/head_picture.jpg'),
                      level: 3
                    },
                    toUser: {
                      nickName: '欻欻'
                    },
                    content: '倒贴是不可能的，因为我是非洲人',
                    createTime: '20191128223030',
                    like: 158,
                    dislike: 10 },
                  {
                    fromUser: {
                      nickName: '霸霸',
                      headPicture: require('../assets/img/head_picture.jpg'),
                      level: 3
                    },
                    toUser: {
                      nickName: '欻欻'
                    },
                    content: '倒贴是不可能的，因为我是非洲人',
                    createTime: '20191128223030',
                    like: 158,
                    dislike: 10 },
                  {
                    fromUser: {
                      nickName: '霸霸',
                      headPicture: require('../assets/img/head_picture.jpg'),
                      level: 3
                    },
                    toUser: {
                      nickName: '欻欻'
                    },
                    content: '倒贴是不可能的，因为我是非洲人',
                    createTime: '20191128223030',
                    like: 158,
                    dislike: 10 },
                  {
                    fromUser: {
                      nickName: '霸霸',
                      headPicture: require('../assets/img/head_picture.jpg'),
                      level: 3
                    },
                    toUser: {
                      nickName: '欻欻'
                    },
                    content: '倒贴是不可能的，因为我是非洲人',
                    createTime: '20191128223030',
                    like: 158,
                    dislike: 10 },
                  {
                    fromUser: {
                      nickName: '霸霸',
                      headPicture: require('../assets/img/head_picture.jpg'),
                      level: 3
                    },
                    toUser: {
                      nickName: '欻欻'
                    },
                    content: '倒贴是不可能的，因为我是非洲人',
                    createTime: '20191128223030',
                    like: 158,
                    dislike: 10 }
                ]
              },
              {
                user: {
                  nickName: '巨大住',
                  headPicture: require('../assets/img/head_picture.jpg'),
                  level: 4
                },
                content: '要是我中了一等奖给点赞的朋友一人一杯奶茶还有把你们和柴犬发的视频一一点赞',
                createTime: '20191128223030',
                like: 158,
                dislike: 10,
                comment2List: [
                  {
                    fromUser: {
                      nickName: '霸霸',
                      headPicture: require('../assets/img/head_picture.jpg'),
                      level: 3
                    },
                    toUser: {
                      nickName: '欻欻'
                    },
                    content: '倒贴是不可能的，因为我是非洲人',
                    createTime: '20191128223030',
                    like: 158,
                    dislike: 10 },
                  {
                    fromUser: {
                      nickName: '霸霸',
                      headPicture: require('../assets/img/head_picture.jpg'),
                      level: 3
                    },
                    toUser: {
                      nickName: '欻欻'
                    },
                    content: '倒贴是不可能的，因为我是非洲人',
                    createTime: '20191128223030',
                    like: 158,
                    dislike: 10 },
                  {
                    fromUser: {
                      nickName: '霸霸',
                      headPicture: require('../assets/img/head_picture.jpg'),
                      level: 3
                    },
                    toUser: {
                      nickName: '欻欻'
                    },
                    content: '倒贴是不可能的，因为我是非洲人',
                    createTime: '20191128223030',
                    like: 158,
                    dislike: 10 },
                  {
                    fromUser: {
                      nickName: '霸霸',
                      headPicture: require('../assets/img/head_picture.jpg'),
                      level: 3
                    },
                    toUser: {
                      nickName: '欻欻'
                    },
                    content: '倒贴是不可能的，因为我是非洲人',
                    createTime: '20191128223030',
                    like: 158,
                    dislike: 10 },
                  {
                    fromUser: {
                      nickName: '霸霸',
                      headPicture: require('../assets/img/head_picture.jpg'),
                      level: 3
                    },
                    toUser: {
                      nickName: '欻欻'
                    },
                    content: '倒贴是不可能的，因为我是非洲人',
                    createTime: '20191128223030',
                    like: 158,
                    dislike: 10 },
                  {
                    fromUser: {
                      nickName: '霸霸',
                      headPicture: require('../assets/img/head_picture.jpg'),
                      level: 3
                    },
                    toUser: {
                      nickName: '欻欻'
                    },
                    content: '倒贴是不可能的，因为我是非洲人',
                    createTime: '20191128223030',
                    like: 158,
                    dislike: 10 },
                  {
                    fromUser: {
                      nickName: '霸霸',
                      headPicture: require('../assets/img/head_picture.jpg'),
                      level: 3
                    },
                    toUser: {
                      nickName: '欻欻'
                    },
                    content: '倒贴是不可能的，因为我是非洲人',
                    createTime: '20191128223030',
                    like: 158,
                    dislike: 10 },
                  {
                    fromUser: {
                      nickName: '霸霸',
                      headPicture: require('../assets/img/head_picture.jpg'),
                      level: 3
                    },
                    toUser: {
                      nickName: '欻欻'
                    },
                    content: '倒贴是不可能的，因为我是非洲人',
                    createTime: '20191128223030',
                    like: 158,
                    dislike: 10 },
                  {
                    fromUser: {
                      nickName: '霸霸',
                      headPicture: require('../assets/img/head_picture.jpg'),
                      level: 3
                    },
                    toUser: {
                      nickName: '欻欻'
                    },
                    content: '倒贴是不可能的，因为我是非洲人',
                    createTime: '20191128223030',
                    like: 158,
                    dislike: 10 },
                  {
                    fromUser: {
                      nickName: '霸霸',
                      headPicture: require('../assets/img/head_picture.jpg'),
                      level: 3
                    },
                    toUser: {
                      nickName: '欻欻'
                    },
                    content: '倒贴是不可能的，因为我是非洲人',
                    createTime: '20191128223030',
                    like: 158,
                    dislike: 10 },
                  {
                    fromUser: {
                      nickName: '霸霸',
                      headPicture: require('../assets/img/head_picture.jpg'),
                      level: 3
                    },
                    toUser: {
                      nickName: '欻欻'
                    },
                    content: '倒贴是不可能的，因为我是非洲人',
                    createTime: '20191128223030',
                    like: 158,
                    dislike: 10 },
                  {
                    fromUser: {
                      nickName: '霸霸',
                      headPicture: require('../assets/img/head_picture.jpg'),
                      level: 3
                    },
                    toUser: {
                      nickName: '欻欻'
                    },
                    content: '倒贴是不可能的，因为我是非洲人',
                    createTime: '20191128223030',
                    like: 158,
                    dislike: 10 },
                  {
                    fromUser: {
                      nickName: '霸霸',
                      headPicture: require('../assets/img/head_picture.jpg'),
                      level: 3
                    },
                    toUser: {
                      nickName: '欻欻'
                    },
                    content: '倒贴是不可能的，因为我是非洲人',
                    createTime: '20191128223030',
                    like: 158,
                    dislike: 10 },
                  {
                    fromUser: {
                      nickName: '霸霸',
                      headPicture: require('../assets/img/head_picture.jpg'),
                      level: 3
                    },
                    toUser: {
                      nickName: '欻欻'
                    },
                    content: '倒贴是不可能的，因为我是非洲人',
                    createTime: '20191128223030',
                    like: 158,
                    dislike: 10 },
                  {
                    fromUser: {
                      nickName: '霸霸',
                      headPicture: require('../assets/img/head_picture.jpg'),
                      level: 3
                    },
                    toUser: {
                      nickName: '欻欻'
                    },
                    content: '倒贴是不可能的，因为我是非洲人',
                    createTime: '20191128223030',
                    like: 158,
                    dislike: 10 }
                ]
              },
              {
                user: {
                  nickName: '巨大住',
                  headPicture: require('../assets/img/head_picture.jpg'),
                  level: 4
                },
                content: '要是我中了一等奖给点赞的朋友一人一杯奶茶还有把你们和柴犬发的视频一一点赞',
                createTime: '20191128223030',
                like: 158,
                dislike: 10,
                comment2List: [
                  {
                    fromUser: {
                      nickName: '霸霸',
                      headPicture: require('../assets/img/head_picture.jpg'),
                      level: 3
                    },
                    toUser: {
                      nickName: '欻欻'
                    },
                    content: '倒贴是不可能的，因为我是非洲人',
                    createTime: '20191128223030',
                    like: 158,
                    dislike: 10 },
                  {
                    fromUser: {
                      nickName: '霸霸',
                      headPicture: require('../assets/img/head_picture.jpg'),
                      level: 3
                    },
                    toUser: {
                      nickName: '欻欻'
                    },
                    content: '倒贴是不可能的，因为我是非洲人',
                    createTime: '20191128223030',
                    like: 158,
                    dislike: 10 },
                  {
                    fromUser: {
                      nickName: '霸霸',
                      headPicture: require('../assets/img/head_picture.jpg'),
                      level: 3
                    },
                    toUser: {
                      nickName: '欻欻'
                    },
                    content: '倒贴是不可能的，因为我是非洲人',
                    createTime: '20191128223030',
                    like: 158,
                    dislike: 10 },
                  {
                    fromUser: {
                      nickName: '霸霸',
                      headPicture: require('../assets/img/head_picture.jpg'),
                      level: 3
                    },
                    toUser: {
                      nickName: '欻欻'
                    },
                    content: '倒贴是不可能的，因为我是非洲人',
                    createTime: '20191128223030',
                    like: 158,
                    dislike: 10 },
                  {
                    fromUser: {
                      nickName: '霸霸',
                      headPicture: require('../assets/img/head_picture.jpg'),
                      level: 3
                    },
                    toUser: {
                      nickName: '欻欻'
                    },
                    content: '倒贴是不可能的，因为我是非洲人',
                    createTime: '20191128223030',
                    like: 158,
                    dislike: 10 },
                  {
                    fromUser: {
                      nickName: '霸霸',
                      headPicture: require('../assets/img/head_picture.jpg'),
                      level: 3
                    },
                    toUser: {
                      nickName: '欻欻'
                    },
                    content: '倒贴是不可能的，因为我是非洲人',
                    createTime: '20191128223030',
                    like: 158,
                    dislike: 10 },
                  {
                    fromUser: {
                      nickName: '霸霸',
                      headPicture: require('../assets/img/head_picture.jpg'),
                      level: 3
                    },
                    toUser: {
                      nickName: '欻欻'
                    },
                    content: '倒贴是不可能的，因为我是非洲人',
                    createTime: '20191128223030',
                    like: 158,
                    dislike: 10 },
                  {
                    fromUser: {
                      nickName: '霸霸',
                      headPicture: require('../assets/img/head_picture.jpg'),
                      level: 3
                    },
                    toUser: {
                      nickName: '欻欻'
                    },
                    content: '倒贴是不可能的，因为我是非洲人',
                    createTime: '20191128223030',
                    like: 158,
                    dislike: 10 },
                  {
                    fromUser: {
                      nickName: '霸霸',
                      headPicture: require('../assets/img/head_picture.jpg'),
                      level: 3
                    },
                    toUser: {
                      nickName: '欻欻'
                    },
                    content: '倒贴是不可能的，因为我是非洲人',
                    createTime: '20191128223030',
                    like: 158,
                    dislike: 10 },
                  {
                    fromUser: {
                      nickName: '霸霸',
                      headPicture: require('../assets/img/head_picture.jpg'),
                      level: 3
                    },
                    toUser: {
                      nickName: '欻欻'
                    },
                    content: '倒贴是不可能的，因为我是非洲人',
                    createTime: '20191128223030',
                    like: 158,
                    dislike: 10 },
                  {
                    fromUser: {
                      nickName: '霸霸',
                      headPicture: require('../assets/img/head_picture.jpg'),
                      level: 3
                    },
                    toUser: {
                      nickName: '欻欻'
                    },
                    content: '倒贴是不可能的，因为我是非洲人',
                    createTime: '20191128223030',
                    like: 158,
                    dislike: 10 },
                  {
                    fromUser: {
                      nickName: '霸霸',
                      headPicture: require('../assets/img/head_picture.jpg'),
                      level: 3
                    },
                    toUser: {
                      nickName: '欻欻'
                    },
                    content: '倒贴是不可能的，因为我是非洲人',
                    createTime: '20191128223030',
                    like: 158,
                    dislike: 10 },
                  {
                    fromUser: {
                      nickName: '霸霸',
                      headPicture: require('../assets/img/head_picture.jpg'),
                      level: 3
                    },
                    toUser: {
                      nickName: '欻欻'
                    },
                    content: '倒贴是不可能的，因为我是非洲人',
                    createTime: '20191128223030',
                    like: 158,
                    dislike: 10 },
                  {
                    fromUser: {
                      nickName: '霸霸',
                      headPicture: require('../assets/img/head_picture.jpg'),
                      level: 3
                    },
                    toUser: {
                      nickName: '欻欻'
                    },
                    content: '倒贴是不可能的，因为我是非洲人',
                    createTime: '20191128223030',
                    like: 158,
                    dislike: 10 },
                  {
                    fromUser: {
                      nickName: '霸霸',
                      headPicture: require('../assets/img/head_picture.jpg'),
                      level: 3
                    },
                    toUser: {
                      nickName: '欻欻'
                    },
                    content: '倒贴是不可能的，因为我是非洲人',
                    createTime: '20191128223030',
                    like: 158,
                    dislike: 10 }
                ]
              },
              {
                user: {
                  nickName: '巨大住',
                  headPicture: require('../assets/img/head_picture.jpg'),
                  level: 4
                },
                content: '要是我中了一等奖给点赞的朋友一人一杯奶茶还有把你们和柴犬发的视频一一点赞',
                createTime: '20191128223030',
                like: 158,
                dislike: 10,
                comment2List: [
                  {
                    fromUser: {
                      nickName: '霸霸',
                      headPicture: require('../assets/img/head_picture.jpg'),
                      level: 3
                    },
                    toUser: {
                      nickName: '欻欻'
                    },
                    content: '倒贴是不可能的，因为我是非洲人',
                    createTime: '20191128223030',
                    like: 158,
                    dislike: 10 },
                  {
                    fromUser: {
                      nickName: '霸霸',
                      headPicture: require('../assets/img/head_picture.jpg'),
                      level: 3
                    },
                    toUser: {
                      nickName: '欻欻'
                    },
                    content: '倒贴是不可能的，因为我是非洲人',
                    createTime: '20191128223030',
                    like: 158,
                    dislike: 10 },
                  {
                    fromUser: {
                      nickName: '霸霸',
                      headPicture: require('../assets/img/head_picture.jpg'),
                      level: 3
                    },
                    toUser: {
                      nickName: '欻欻'
                    },
                    content: '倒贴是不可能的，因为我是非洲人',
                    createTime: '20191128223030',
                    like: 158,
                    dislike: 10 },
                  {
                    fromUser: {
                      nickName: '霸霸',
                      headPicture: require('../assets/img/head_picture.jpg'),
                      level: 3
                    },
                    toUser: {
                      nickName: '欻欻'
                    },
                    content: '倒贴是不可能的，因为我是非洲人',
                    createTime: '20191128223030',
                    like: 158,
                    dislike: 10 },
                  {
                    fromUser: {
                      nickName: '霸霸',
                      headPicture: require('../assets/img/head_picture.jpg'),
                      level: 3
                    },
                    toUser: {
                      nickName: '欻欻'
                    },
                    content: '倒贴是不可能的，因为我是非洲人',
                    createTime: '20191128223030',
                    like: 158,
                    dislike: 10 },
                  {
                    fromUser: {
                      nickName: '霸霸',
                      headPicture: require('../assets/img/head_picture.jpg'),
                      level: 3
                    },
                    toUser: {
                      nickName: '欻欻'
                    },
                    content: '倒贴是不可能的，因为我是非洲人',
                    createTime: '20191128223030',
                    like: 158,
                    dislike: 10 },
                  {
                    fromUser: {
                      nickName: '霸霸',
                      headPicture: require('../assets/img/head_picture.jpg'),
                      level: 3
                    },
                    toUser: {
                      nickName: '欻欻'
                    },
                    content: '倒贴是不可能的，因为我是非洲人',
                    createTime: '20191128223030',
                    like: 158,
                    dislike: 10 },
                  {
                    fromUser: {
                      nickName: '霸霸',
                      headPicture: require('../assets/img/head_picture.jpg'),
                      level: 3
                    },
                    toUser: {
                      nickName: '欻欻'
                    },
                    content: '倒贴是不可能的，因为我是非洲人',
                    createTime: '20191128223030',
                    like: 158,
                    dislike: 10 },
                  {
                    fromUser: {
                      nickName: '霸霸',
                      headPicture: require('../assets/img/head_picture.jpg'),
                      level: 3
                    },
                    toUser: {
                      nickName: '欻欻'
                    },
                    content: '倒贴是不可能的，因为我是非洲人',
                    createTime: '20191128223030',
                    like: 158,
                    dislike: 10 },
                  {
                    fromUser: {
                      nickName: '霸霸',
                      headPicture: require('../assets/img/head_picture.jpg'),
                      level: 3
                    },
                    toUser: {
                      nickName: '欻欻'
                    },
                    content: '倒贴是不可能的，因为我是非洲人',
                    createTime: '20191128223030',
                    like: 158,
                    dislike: 10 },
                  {
                    fromUser: {
                      nickName: '霸霸',
                      headPicture: require('../assets/img/head_picture.jpg'),
                      level: 3
                    },
                    toUser: {
                      nickName: '欻欻'
                    },
                    content: '倒贴是不可能的，因为我是非洲人',
                    createTime: '20191128223030',
                    like: 158,
                    dislike: 10 },
                  {
                    fromUser: {
                      nickName: '霸霸',
                      headPicture: require('../assets/img/head_picture.jpg'),
                      level: 3
                    },
                    toUser: {
                      nickName: '欻欻'
                    },
                    content: '倒贴是不可能的，因为我是非洲人',
                    createTime: '20191128223030',
                    like: 158,
                    dislike: 10 },
                  {
                    fromUser: {
                      nickName: '霸霸',
                      headPicture: require('../assets/img/head_picture.jpg'),
                      level: 3
                    },
                    toUser: {
                      nickName: '欻欻'
                    },
                    content: '倒贴是不可能的，因为我是非洲人',
                    createTime: '20191128223030',
                    like: 158,
                    dislike: 10 },
                  {
                    fromUser: {
                      nickName: '霸霸',
                      headPicture: require('../assets/img/head_picture.jpg'),
                      level: 3
                    },
                    toUser: {
                      nickName: '欻欻'
                    },
                    content: '倒贴是不可能的，因为我是非洲人',
                    createTime: '20191128223030',
                    like: 158,
                    dislike: 10 },
                  {
                    fromUser: {
                      nickName: '霸霸',
                      headPicture: require('../assets/img/head_picture.jpg'),
                      level: 3
                    },
                    toUser: {
                      nickName: '欻欻'
                    },
                    content: '倒贴是不可能的，因为我是非洲人',
                    createTime: '20191128223030',
                    like: 158,
                    dislike: 10 }
                ]
              },
              {
                user: {
                  nickName: '巨大住',
                  headPicture: require('../assets/img/head_picture.jpg'),
                  level: 4
                },
                content: '要是我中了一等奖给点赞的朋友一人一杯奶茶还有把你们和柴犬发的视频一一点赞',
                createTime: '20191128223030',
                like: 158,
                dislike: 10,
                comment2List: [
                  {
                    fromUser: {
                      nickName: '霸霸',
                      headPicture: require('../assets/img/head_picture.jpg'),
                      level: 3
                    },
                    toUser: {
                      nickName: '欻欻'
                    },
                    content: '倒贴是不可能的，因为我是非洲人',
                    createTime: '20191128223030',
                    like: 158,
                    dislike: 10 },
                  {
                    fromUser: {
                      nickName: '霸霸',
                      headPicture: require('../assets/img/head_picture.jpg'),
                      level: 3
                    },
                    toUser: {
                      nickName: '欻欻'
                    },
                    content: '倒贴是不可能的，因为我是非洲人',
                    createTime: '20191128223030',
                    like: 158,
                    dislike: 10 },
                  {
                    fromUser: {
                      nickName: '霸霸',
                      headPicture: require('../assets/img/head_picture.jpg'),
                      level: 3
                    },
                    toUser: {
                      nickName: '欻欻'
                    },
                    content: '倒贴是不可能的，因为我是非洲人',
                    createTime: '20191128223030',
                    like: 158,
                    dislike: 10 },
                  {
                    fromUser: {
                      nickName: '霸霸',
                      headPicture: require('../assets/img/head_picture.jpg'),
                      level: 3
                    },
                    toUser: {
                      nickName: '欻欻'
                    },
                    content: '倒贴是不可能的，因为我是非洲人',
                    createTime: '20191128223030',
                    like: 158,
                    dislike: 10 },
                  {
                    fromUser: {
                      nickName: '霸霸',
                      headPicture: require('../assets/img/head_picture.jpg'),
                      level: 3
                    },
                    toUser: {
                      nickName: '欻欻'
                    },
                    content: '倒贴是不可能的，因为我是非洲人',
                    createTime: '20191128223030',
                    like: 158,
                    dislike: 10 },
                  {
                    fromUser: {
                      nickName: '霸霸',
                      headPicture: require('../assets/img/head_picture.jpg'),
                      level: 3
                    },
                    toUser: {
                      nickName: '欻欻'
                    },
                    content: '倒贴是不可能的，因为我是非洲人',
                    createTime: '20191128223030',
                    like: 158,
                    dislike: 10 },
                  {
                    fromUser: {
                      nickName: '霸霸',
                      headPicture: require('../assets/img/head_picture.jpg'),
                      level: 3
                    },
                    toUser: {
                      nickName: '欻欻'
                    },
                    content: '倒贴是不可能的，因为我是非洲人',
                    createTime: '20191128223030',
                    like: 158,
                    dislike: 10 },
                  {
                    fromUser: {
                      nickName: '霸霸',
                      headPicture: require('../assets/img/head_picture.jpg'),
                      level: 3
                    },
                    toUser: {
                      nickName: '欻欻'
                    },
                    content: '倒贴是不可能的，因为我是非洲人',
                    createTime: '20191128223030',
                    like: 158,
                    dislike: 10 },
                  {
                    fromUser: {
                      nickName: '霸霸',
                      headPicture: require('../assets/img/head_picture.jpg'),
                      level: 3
                    },
                    toUser: {
                      nickName: '欻欻'
                    },
                    content: '倒贴是不可能的，因为我是非洲人',
                    createTime: '20191128223030',
                    like: 158,
                    dislike: 10 },
                  {
                    fromUser: {
                      nickName: '霸霸',
                      headPicture: require('../assets/img/head_picture.jpg'),
                      level: 3
                    },
                    toUser: {
                      nickName: '欻欻'
                    },
                    content: '倒贴是不可能的，因为我是非洲人',
                    createTime: '20191128223030',
                    like: 158,
                    dislike: 10 },
                  {
                    fromUser: {
                      nickName: '霸霸',
                      headPicture: require('../assets/img/head_picture.jpg'),
                      level: 3
                    },
                    toUser: {
                      nickName: '欻欻'
                    },
                    content: '倒贴是不可能的，因为我是非洲人',
                    createTime: '20191128223030',
                    like: 158,
                    dislike: 10 },
                  {
                    fromUser: {
                      nickName: '霸霸',
                      headPicture: require('../assets/img/head_picture.jpg'),
                      level: 3
                    },
                    toUser: {
                      nickName: '欻欻'
                    },
                    content: '倒贴是不可能的，因为我是非洲人',
                    createTime: '20191128223030',
                    like: 158,
                    dislike: 10 },
                  {
                    fromUser: {
                      nickName: '霸霸',
                      headPicture: require('../assets/img/head_picture.jpg'),
                      level: 3
                    },
                    toUser: {
                      nickName: '欻欻'
                    },
                    content: '倒贴是不可能的，因为我是非洲人',
                    createTime: '20191128223030',
                    like: 158,
                    dislike: 10 },
                  {
                    fromUser: {
                      nickName: '霸霸',
                      headPicture: require('../assets/img/head_picture.jpg'),
                      level: 3
                    },
                    toUser: {
                      nickName: '欻欻'
                    },
                    content: '倒贴是不可能的，因为我是非洲人',
                    createTime: '20191128223030',
                    like: 158,
                    dislike: 10 },
                  {
                    fromUser: {
                      nickName: '霸霸',
                      headPicture: require('../assets/img/head_picture.jpg'),
                      level: 3
                    },
                    toUser: {
                      nickName: '欻欻'
                    },
                    content: '倒贴是不可能的，因为我是非洲人',
                    createTime: '20191128223030',
                    like: 158,
                    dislike: 10 }
                ]
              }
            ],
            like: 9999 } },
        { talk: '转发动态', createTime: '20191111101010', type: 1, content: '今晚九点半直播，直播间4288035，尬聊和吃宵夜。今晚想吃三倍辣火鸡面！转发本动态抽两位柴神爷，每人一包三倍辣，不能我一个人炸。', work: { img: require('../assets/img/card.png'), name: '超级牛逼的作品', watch: 1, forward: 29085, comment: 948, like: 9999 } },
        { talk: '转发动态',
          createTime: '20191111101010',
          type: 2,
          content: '今晚九点半直播，直播间4288035，尬聊和吃宵夜。今晚想吃三倍辣火鸡面！转发本动态抽两位柴神爷，每人一包三倍辣，不能我一个人炸。',
          work: { author: { nickName: '柴犬老丸子',
            headPicture: require('../assets/img/head_picture.jpg'),
            level: 4,
            attention: 444,
            fans: 444,
            manifesto: '吃吃吃买买买出去浪 视频分类请看收藏夹 老丸子没事干交流会：733749659 微博/微信：柴犬老丸子'
          },
          img: require('../assets/img/card.png'),
          name: '超级牛逼的作品',
          watch: 1,
          forward: 29085,
          comment: 948,
          like: 9999 } },
        { talk: '转发动态', createTime: '20191111101010', type: 1, content: '今晚九点半直播，直播间4288035，尬聊和吃宵夜。今晚想吃三倍辣火鸡面！转发本动态抽两位柴神爷，每人一包三倍辣，不能我一个人炸。', work: { img: require('../assets/img/card.png'), name: '超级牛逼的作品', watch: 1, forward: 29085, comment: 948, like: 9999 } },
        { talk: '转发动态',
          createTime: '20191111101010',
          type: 2,
          content: '今晚九点半直播，直播间4288035，尬聊和吃宵夜。今晚想吃三倍辣火鸡面！转发本动态抽两位柴神爷，每人一包三倍辣，不能我一个人炸。',
          work: { author: { nickName: '柴犬老丸子',
            headPicture: require('../assets/img/head_picture.jpg'),
            level: 4,
            attention: 444,
            fans: 444,
            manifesto: '吃吃吃买买买出去浪 视频分类请看收藏夹 老丸子没事干交流会：733749659 微博/微信：柴犬老丸子'
          },
          img: require('../assets/img/card.png'),
          name: '超级牛逼的作品',
          watch: 1,
          forward: 29085,
          comment: 948,
          like: 9999 } },
        { talk: '转发动态', createTime: '20191111101010', type: 1, content: '今晚九点半直播，直播间4288035，尬聊和吃宵夜。今晚想吃三倍辣火鸡面！转发本动态抽两位柴神爷，每人一包三倍辣，不能我一个人炸。', work: { img: require('../assets/img/card.png'), name: '超级牛逼的作品', watch: 1, forward: 29085, comment: 948, like: 9999 } },
        { talk: '转发动态',
          createTime: '20191111101010',
          type: 2,
          content: '今晚九点半直播，直播间4288035，尬聊和吃宵夜。今晚想吃三倍辣火鸡面！转发本动态抽两位柴神爷，每人一包三倍辣，不能我一个人炸。',
          work: { author: { nickName: '柴犬老丸子',
            headPicture: require('../assets/img/head_picture.jpg'),
            level: 4,
            attention: 444,
            fans: 444,
            manifesto: '吃吃吃买买买出去浪 视频分类请看收藏夹 老丸子没事干交流会：733749659 微博/微信：柴犬老丸子'
          },
          img: require('../assets/img/card.png'),
          name: '超级牛逼的作品',
          watch: 1,
          forward: 29085,
          comment: 948,
          like: 9999 } }
      ]
    }
  },
  mounted () {
    window.addEventListener('scroll', this.fixUserInfo)
  },
  destroyed () {
    window.removeEventListener('scroll', this.fixUserInfo)
  },
  methods: {
    fixUserInfo () {
      const that = this
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      let userInfo = document.getElementById('userInfo')
      if (userInfo) {
        that.scrollTop = scrollTop
        if (that.scrollTop > 70) {
          userInfo.style.top = '0px'
          userInfo.style.position = 'fixed'
        } else {
          userInfo.style.position = 'relative'
        }
      }
    }
  }
}
</script>
<template>
  <div class="event-component">
    <div class="left">
      <event-card v-for="(event,idx) in events"
                  :key="idx"
                  :event="event"
                  :user="user">

      </event-card>
    </div>
    <div class="right">

      <div class="normal-card"
           id="userInfo">
        <div class="banner">
        </div>
        <div>
          <div>
            <el-avatar :src="user.headPicture"
                       class="head-picture"
                       :size="48"></el-avatar>
          </div>
          <div class="user-info-right">
            <div class="user-info-nick-name">{{user.nickName}}<el-tag type="danger"
                      style="margin-left:5px;"
                      :size="'mini'">LV4</el-tag>
            </div>
            <div class="user-info-number">
              <span>关注：{{user.attention}}</span>
              <span style="margin-left:20px">粉丝：{{user.fans}}</span>
              <span style="margin-left:20px">作品：{{user.works}}</span>
            </div>
            <div class="user-info-manifesto">
              {{user.manifesto}}
            </div>

          </div>
        </div>
      </div>

    </div>
  </div>
</template>
<style scoped>
.event-component {
  display: flex;
}
.left {
  width: 800px;
}
.right {
  width: 440px;
  margin-left: 40px;
}
.normal-card {
  width: 100%;
  border-radius: 5px;
  background: #fff;
  margin-bottom: 20px;
  position: relative;
  width: 440px;
  padding-bottom: 20px;
}
.banner {
  background: url("~@/assets/img/banner_bg.png") no-repeat;
  width: 100%;
  height: 120px;
  background-position: center;
}
.head-picture {
  border: 2px solid #fff;
  width: 52px;
  height: 52px;
  position: absolute;
  top: 94px;
  left: 20px;
}
.user-info-right {
  margin-left: 90px;
}
.user-info-nick-name {
  text-align: left;
  font-size: 16px;
  color: #222;
  padding: 5px;
}
.user-info-number {
  text-align: left;
  font-size: 12px;
  color: #222;
  padding: 5px;
}
.user-info-manifesto {
  text-align: left;
  font-size: 12px;
  color: #99a2aa;
  padding: 5px;
}
</style>
