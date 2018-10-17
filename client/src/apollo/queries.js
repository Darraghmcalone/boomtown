import gql from 'graphql-tag'

/**
 * Item and user-related queries and mutations.
 */

// const ItemFields = gql`
//   fragment ItemFields on Item {
//     id
//     title
//     imageurl
//     description
//     created
//     tags {
//       id
//       title
//     }

//     itemowner {
//       id
//       fullname
//       email
//       bio
//     }

//     borrower {
//       id
//       fullname
//       email
//       bio
//     }
//     # See the Apollo docs for instructions on how to use fragments:
//     # https://www.apollographql.com/docs/angular/features/fragments.html
//   }
// `

// export const ITEM_QUERY = gql`
//   query item($id: ID!) {
//     items(filter :$id) {
//       ...ItemFields
//     }
//   }
//   ${ItemFields}
// `

export const ALL_ITEMS_QUERY = gql`
query {
    items {
        id
        title
        imageurl
        description
        created
        tags {
          id
          title
        }
        borrower {
          id
        }
        itemowner{
          id
          fullname
        }
    
      }
    }
    `

// export const ALL_USER_ITEMS_QUERY = gql`
//   query user($id: ID!, $bio: String, $email: String!, $fullname: String! ) {
//     user(id: ID){
//     ...Itemnfields
//   }
// }
//   ${ItemFields}
// `

// export const ALL_TAGS_QUERY = gql`
//     query tags($filter: tags) {
//       tags(filter: $filter) {
//         ...ItemFields
//       }
//     }
//     ${ItemFields}
//   `

// export const ADD_ITEM_MUTATION = gql`
//   mutation addItem($item: NewItemInput!, $image: Upload!) {
//     # @TODO: Pass the item and image into the addItem mutation as arguments
//     # and return the new item id when the mutation is complete.
//   }
// `

/**
 * Auth-related queries and mutations.
 */

export const VIEWER_QUERY = gql`
query {
  viewer {
    id
    email
    fullname
  }
}
`

// export const LOGOUT_MUTATION = gql`
//   mutation {
//     # @TODO: Run the logout mutation.
//   }
// `


export const SIGNUP_MUTATION = gql`
  mutation signup($user: SignUpInput!) {
    signup(user: $user)
  }
`
export const LOGIN_MUTATION = gql`
  mutation login($user: LoginInput!) {
    login(user: $user)
  }
`

