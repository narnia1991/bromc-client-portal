import React from 'react'
import PropTypes from 'prop-types'

import { Button, Modal } from 'semantic-ui-react'

const propTypes = {
  showModal: PropTypes.bool.isRequired,
  errorMsg: PropTypes.string.isRequired,
  handleCloseModal: PropTypes.func.isRequired,
}

function ErrorModal(propTypes) {
  const { showModal, errorMsg, handleCloseModal } = propTypes

  return (
    <Modal size="mini" open={showModal} dimmer="blurring" onClose={() => handleCloseModal()} closeIcon>
      <Modal.Header>Error: </Modal.Header>
      <Modal.Content>
        <h4 style={{ textAlign: 'center' }}>{errorMsg}</h4>
      </Modal.Content>
      <Modal.Actions>
        <Button primary style={{ width: 150, margin: '0 auto', display: 'block' }} onClick={() => handleCloseModal()}>
          Close
        </Button>
      </Modal.Actions>
    </Modal>
  )
}

export default ErrorModal
