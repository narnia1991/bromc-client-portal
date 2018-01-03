/**
 * @Author: Junar B. Alinsub
 * @Date:   2018-01-01T19:15:10+08:00
 * @Email:  junaralinsub2@gmail.com
 * @Filename: Card.js
 * @Last modified by:   Junar B. Alinsub
 * @Last modified time: 2018-01-03T16:01:23+08:00
 * @License: MIT
 * @Copyright: use it however you like, just buy me coffee next time
 */

import React from 'react'
import { Button, Card, Image } from 'semantic-ui-react'

const CardExampleGroups = () => (
  <Card.Group>
    <Card>
      <Card.Content>
        <Image floated="right" size="mini" src="./elliot.jpg" />
        <Card.Header>Steve Sanders</Card.Header>
        <Card.Meta>Friends of Elliot</Card.Meta>
        <Card.Description>
          Steve wants to add you to the group <strong>best friends</strong>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className="ui two buttons">
          <Button basic color="green">
            Approve
          </Button>
          <Button basic color="red">
            Decline
          </Button>
        </div>
      </Card.Content>
    </Card>
    <Card>
      <Card.Content>
        <Image
          floated="right"
          size="mini"
          src="/assets/images/avatar/large/molly.png"
        />
        <Card.Header>Molly Thomas</Card.Header>
        <Card.Meta>New User</Card.Meta>
        <Card.Description>
          Molly wants to add you to the group <strong>musicians</strong>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className="ui two buttons">
          <Button basic color="green">
            Approve
          </Button>
          <Button basic color="red">
            Decline
          </Button>
        </div>
      </Card.Content>
    </Card>
    <Card>
      <Card.Content>
        <Image
          floated="right"
          size="mini"
          src="/assets/images/avatar/large/jenny.jpg"
        />
        <Card.Header>Jenny Lawrence</Card.Header>
        <Card.Meta>New User</Card.Meta>
        <Card.Description>
          Jenny requested permission to view your contact details
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className="ui two buttons">
          <Button basic color="green">
            Approve
          </Button>
          <Button basic color="red">
            Decline
          </Button>
        </div>
      </Card.Content>
    </Card>
  </Card.Group>
)

export default CardExampleGroups
