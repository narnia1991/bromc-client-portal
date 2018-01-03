import React from 'react'
import PropTypes from 'prop-types'

import { Button, Modal } from 'semantic-ui-react'

const propTypes = {
  deleteModal: PropTypes.bool.isRequired,
  handleDeleteModal: PropTypes.func.isRequired,
  handleDeleteItem: PropTypes.func.isRequired,
  deleteMessage: PropTypes.string,
}

function DeleteModal(props) {
  const { deleteModal, handleDeleteModal, handleDeleteItem, deleteMessage } = props

  return (
    <Modal size="mini" open={deleteModal} dimmer="blurring" onClose={() => handleDeleteModal()} closeIcon>
      <Modal.Header> {deleteMessage ? deleteMessage : 'Do you want to archive this item?'} </Modal.Header>

      {deleteMessage ? (
        <Modal.Actions>
          <Button secondary onClick={() => handleDeleteModal()}>
            Close
          </Button>
        </Modal.Actions>
      ) : (
        <Modal.Actions>
          <Button secondary onClick={() => handleDeleteModal()}>
            No
          </Button>

          <Button positive icon="checkmark" labelPosition="right" content="Yes" onClick={() => handleDeleteItem()} />
        </Modal.Actions>
      )}
    </Modal>
  )
}

export default DeleteModal
