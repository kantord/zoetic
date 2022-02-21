import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import Switch from '@mui/material/Switch'
import useSettings from '../../settings'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
}

export default function SettingsModal({ show, onClose }) {
  const { isCameraMirrored, setIsCameraMirrored } = useSettings()

  return (
    <Modal
      open={show}
      aria-labelledby="zoetic settings"
      aria-describedby="change zoetic settings such as camera settings"
      onClose={onClose}
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h1">
          zoetic settings
        </Typography>
        <FormGroup>
          <FormControlLabel
            control={
              <Switch
                defaultChecked
                checked={isCameraMirrored}
                onChange={(event) => setIsCameraMirrored(event.target.checked)}
              />
            }
            label="Mirror my camera"
          />
        </FormGroup>
      </Box>
    </Modal>
  )
}
