import R from '@app/assets/R'
import * as theme from '@app/theme'
import React, { Component } from 'react'
import { StyleSheet, Text, TouchableOpacity, ViewStyle } from 'react-native'
import { Header } from 'react-native-elements'
import FastImage from 'react-native-fast-image'
import NavigationUtil from '../navigation/NavigationUtil'

interface Props {
  color?: string
  backgroundHeader?: string
  borderBottomHeader?: string
  back?: boolean
  /**
   * View nút phải
   */
  rightComponent?: React.ReactNode
  /**
   * View nút trái
   */
  leftComponent?: React.ReactNode
  /**
   * Title thanh header
   */
  titleHeader: string
}

interface BackProps {
  style?: ViewStyle
}

export class BackButton extends Component<BackProps> {
  render() {
    const { style } = this.props
    return (
      <TouchableOpacity
        style={[style || styles.leftComp]}
        onPress={NavigationUtil.goBack}
      >
        <FastImage
          source={R.images.ic_back}
          style={{ marginLeft: 10, width: 24, height: 24 }}
          tintColor={theme.colors.black}
          resizeMode="contain"
        />
      </TouchableOpacity>
    )
  }
}

export default class RNHeader extends Component<Props> {
  render() {
    const {
      color,
      back,
      titleHeader,
      rightComponent,
      leftComponent,
      borderBottomHeader,
      backgroundHeader,
    } = this.props
    return (
      <Header
        placement="center"
        containerStyle={{
          backgroundColor: backgroundHeader || theme.colors.primary,
          borderBottomColor: borderBottomHeader || theme.colors.primary,
          height: 90,
        }}
        leftComponent={back ? <BackButton /> : leftComponent}
        centerComponent={
          <Text
            style={[
              {
                fontSize: 18,
                fontFamily: R.fonts.san_semi_bold,
              },
              { color: color || 'white' },
            ]}
          >
            {titleHeader}
          </Text>
        }
        rightComponent={rightComponent}
        statusBarProps={{
          //  barStyle: 'light-content',
          translucent: true,
          backgroundColor: 'transparent',
        }}
      />
    )
  }
}

const styles = StyleSheet.create({
  leftComp: {
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  rightComp: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
})
