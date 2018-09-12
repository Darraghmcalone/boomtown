import { adopt } from 'react-adopt'
import { Query, Mutation } from 'react-apollo'
import React from 'react'
import Button from '@material-ui/core/Button'
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
// @TODO: Uncommment this line when the ViewerProvider is added to the app.
// import { ViewerContext } from '../context/ViewerProvider'
// -------------------------------

import {
  ALL_TAGS_QUERY,
  ALL_ITEMS_QUERY,
  ALL_USER_ITEMS_QUERY,
  ADD_ITEM_MUTATION
} from '../apollo/queries'

const itemsData = ({ render }) => {

  return (
    <Query query={ALL_ITEMS_QUERY} variables={{ filter: null }}>
      {({ loading, error, data }) => {
        if (loading) return null;
        if (error) return `Error!: ${error}`;
        console.log("data:", data.items)
     
        return (
          data.items.map((item, index) => {
            return (
              
              <div key={index}>
              <Card>
                <img src={item.imageurl} />
                <p>{item.itemowner.fullname}</p>
                <h1>{item.title}</h1>
                <p>{item.tags.map((tag) => {
                  return `${tag.title}, `;
                })}</p>
                <p>{item.description}</p>

                
                </Card>
              </div>
              
            )
          })
        );
      }}</Query>
  )
}
const userItemsData = ({ userId, render }) => {
  /**
   * @TODO: Use Apollo's <Query /> component to fetch all of a user's items.
   *
   * Note: Your query will need to retrieve only items that belong to a
   * specific user id.
   */
  return undefined
}

const tagData = ({ render }) => {
  /**
   * @TODO: Use Apollo's <Query /> component to fetch all the tags.
   */
  return undefined
}

const addItem = ({ render }) => {
  /**
   * @TODO: Use Apollo's <Mutation /> component to use the signup mutation.
   *
   * Note: Be sure to use `refetchQueries` to refresh Apollo's cache with the
   * latest items for the user.
   */
  return undefined
}
const ItemsContainer = adopt({
  // @TODO: Uncomment each line as you write the corresponding query.
  // tagData,
  itemsData,
  // userItemsData,
  // addItem
  // -------------------------------
})

export default withStyles(ItemsContainer);
