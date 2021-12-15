import React, { useEffect, useState } from 'react'
import PauseIcon from '@mui/icons-material/Pause'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import { ControlManager } from '../../../managers/ControlManager'
import { CommandManager } from '../../../managers/CommandManager'
import EditorEvents from '../../../constants/EditorEvents'
import { InfoTooltip } from '../../layout/Tooltip'
import * as styles from '../styles.module.scss'

const PlayModeTool = () => {
  const [isInPlayMode, setInPlayMode] = useState(false)

  const onTogglePlayMode = () => {
    if (isInPlayMode) {
      ControlManager.instance.leavePlayMode()
    } else {
      ControlManager.instance.enterPlayMode()
    }
    setInPlayMode(ControlManager.instance.isInPlayMode)
  }

  return (
    <div className={styles.toolbarInputGroup + ' ' + styles.playButtonContainer} id="preview">
      <InfoTooltip info={isInPlayMode ? 'Stop Previewing Scene' : 'Preview Scene'}>
        <button onClick={onTogglePlayMode} className={styles.toolButton + ' ' + (isInPlayMode ? styles.selected : '')}>
          {isInPlayMode ? <PauseIcon fontSize="small" /> : <PlayArrowIcon fontSize="small" />}
        </button>
      </InfoTooltip>
    </div>
  )
}

export default PlayModeTool
