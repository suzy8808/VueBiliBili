import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Home from '../views/Home'
import Login from '../views/Login'
import Classify from '../views/Classify'

import PersonCenter from '../views/PersonCenter'
import History from '../views/History'
import PersonSpace from '../views/PersonSpace'
import Event from '../views/Event'
import Message from '../views/Message'
import Work from '../views/Work'
import Upload from '../views/Upload'
import Test from '../views/test/Test'
import PuzzleVerificationTest from '../views/test/PuzzleVerificationTest'
import MarkDownTest from '../views/test/MarkDownTest'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/classify',
      name: 'Classify',
      component: Classify
    },
    {
      path: '/person_center',
      name: 'PersonCenter',
      component: PersonCenter
    },
    {
      path: '/history',
      name: 'History',
      component: History
    },
    {
      path: '/person_space',
      name: 'PersonSpace',
      component: PersonSpace
    },
    {
      path: '/event',
      name: 'Event',
      component: Event
    },
    {
      path: '/message',
      name: 'Message',
      component: Message
    },
    {
      path: '/work',
      name: 'Work',
      component: Work
    },
    {
      path: '/upload',
      name: 'Upload',
      component: Upload
    },
    {
      path: '/test',
      name: 'Test',
      component: Test
    },
    {
      path: '/puzzle_verification',
      name: 'PuzzleVerificationTest',
      component: PuzzleVerificationTest
    },
    {
      path: '/markdown_test',
      name: 'MarkDownTest',
      component: MarkDownTest
    }
  ]
})
