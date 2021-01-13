import React from 'react'
import PropTypes from 'prop-types'

import { getData } from '../utils'
import NimbleEmoji from './emoji/nimble-emoji'
import SkinsEmoji from './skins-emoji'
import SkinsDot from './skins-dot'

export default class Preview extends React.PureComponent {
  constructor(props) {
    super(props)

    this.data = props.data
    this.state = { emoji: null }
  }

  render() {
    var { emoji } = this.state,
      {
        emojiProps,
        skinsProps,
        showSkinTones,
        title,
        emoji: idleEmoji,
        i18n,
        showPreview,
      } = this.props

    return (
      <div className="emoji-mart-preview">

        {showSkinTones && (
          <div
            className={`emoji-mart-preview-skins${skinsProps.skinEmoji ? ' custom' : ''
              }`}
          >

            {skinsProps.skinEmoji ? (
              <SkinsEmoji
                skin={skinsProps.skin}
                emojiProps={emojiProps}
                data={this.data}
                skinEmoji={skinsProps.skinEmoji}
                i18n={i18n}
                onChange={skinsProps.onChange}
              />
            ) : (
                <SkinsDot
                  skin={skinsProps.skin}
                  i18n={i18n}
                  onChange={skinsProps.onChange}
                />
              )}
          </div>
        )}
      </div>
    )
  }
}

Preview.propTypes /* remove-proptypes */ = {
  showSkinTones: PropTypes.bool,
  title: PropTypes.string.isRequired,
  emoji: PropTypes.string.isRequired,
  emojiProps: PropTypes.object.isRequired,
  skinsProps: PropTypes.object.isRequired,
}

Preview.defaultProps = {
  showSkinTones: true,
  onChange: () => { },
}
