import React from 'react'
import { adopt } from 'react-adopt'
import { Query, Mutation } from 'react-apollo'
import { ViewerContext } from '../context/ViewerProvider'

import {
  ALL_TAGS_QUERY,
  ALL_ITEMS_QUERY,
  ALL_USER_ITEMS_QUERY,
  ADD_ITEM_MUTATION
} from '../apollo/queries'

const itemsData = ({ render }) => (
  <ViewerContext.Consumer>
    {({ viewer }) => (
      <Query query={ALL_ITEMS_QUERY}>
        {({ data: { items } = {}, loading, error }) =>
          render({ items, loading, error })
        }
      </Query>
    )}
  </ViewerContext.Consumer>
)

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
  itemsData
  // userItemsData,
  // addItem
  // -------------------------------
})

export default ItemsContainer
