import React from 'react'
import Story from './Story'
import './StoryReel.css'

function StoryReel() {
    return (
        <div className='storyReel'>
            <Story
                image='https://images.unsplash.com/flagged/photo-1579782647395-2e6fb36a64f2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=737&q=80'
                profileSrc='https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5f47d4de7637290765bce495%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D1398%26cropX2%3D3908%26cropY1%3D594%26cropY2%3D3102'
                title='Elon Musk'
            />
            <Story
                image='https://assets.vogue.com/photos/5fa75f35fbb8574f720c31b6/master/w_2560%2Cc_limit/1229520276'
                profileSrc='https://bostonglobe-prod.cdn.arcpublishing.com/resizer/OUauU4O6KU7IMmCNIkNt__ajx28=/1024x0/cloudfront-us-east-1.images.arcpublishing.com/bostonglobe/ERCANJS2WHQYQS5UQGK2VXT5VQ.jpg'
                title='Joe Biden'
            />
            <Story
                image='https://images.unsplash.com/photo-1572980455537-4be2954d0fb0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
                profileSrc='https://img.texasmonthly.com/2017/12/PostMalone.jpg?auto=compress&crop=faces&fit=fit&fm=jpg&h=0&ixlib=php-1.2.1&q=45&w=1120'
                title='Post Malone'
            />
            <Story
                image='https://www.buro247.sg/thumb/950x700/local/images/buro/galleries/2020/02/0_orville-peck-burosingapore-1.jpg'
                profileSrc='https://media.newyorker.com/photos/5d4cabe29984ea00086de304/4:3/w_492,c_limit/Crouch-OrvillePeck.jpg'
                title='Orville Peck'
            />
            <Story
                image='https://images.unsplash.com/photo-1531554694128-c4c6665f59c2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
                profileSrc='https://content.fortune.com/wp-content/uploads/2015/03/9826_01_0153.jpg?resize=500,333'
                title='Tim Cook'
            />
        </div>
    )
}

export default StoryReel
