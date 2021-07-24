import gql from 'graphql-tag';
import { useMutation } from '@apollo/client';

const DELETE_PRODUCT_MUTATION = gql`
  mutation DELETE_PRODUCT_MUTATION($id: ID!) {
    deleteProduct(id: $id) {
      id
      name
    }
  }
`;

export default function DeleteProduct({ id, children }) {
  const [deleteProduct, { loading, error }] = useMutation(
    DELETE_PRODUCT_MUTATION,
    {
      variables: { id },
    }
  );

  return (
    <button
      type='button'
      onClick={() => {
        if (confirm('Are you sure you want to delete this item')) {
          deleteProduct(id).catch((err) => alert(err.message));
        }
      }}
    >
      {children}
    </button>
  );
}