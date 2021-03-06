import React, { PureComponent, PropTypes } from 'react';
import Img from 'react-image'
import { Icon } from 'antd'
import styles from './index.css'
import { View } from 'react-web-dom'

export default class NetWorkImage extends PureComponent {
    render() {
        const { src, style, className, type, onClick } = this.props
        let unloaderSrc = type && type === 'avatar' ?
            require('../../images/default_avatar.png') : type && type === 'goods' ?
                require('../../images/default_goods_img.png') : require('../../images/networkImageError.png')
        return (
            <Img
                src={src}
                style={style}
                className={className}
                loader={
                    <View
                        style={style}
                        className={`${className} ${styles.loader}`}
                    >
                        <Icon
                            type="loading"
                            style={style}
                            className={className}
                        />
                    </View>
                }
                unloader={
                    <img
                        alt=''
                        src={unloaderSrc}
                        style={style}
                        className={className}
                    />
                }
                onClick={(e) => {
                    if (typeof onClick !== 'undefined') {
                        onClick(e)
                    }
                }}
            />
        )
    }
}
