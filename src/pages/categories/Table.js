// ** Custom Components
// import AvatarGroup from "@components/avatar-group";

// ** Images
import react from '../../assets/booksImages/1.jpg';
import vuejs from '../../assets/booksImages/1.jpg';
import angular from '../../assets/booksImages/1.jpg';
import bootstrap from '../../assets/booksImages/1.jpg';

// ** Icons Imports
import { MoreVertical, Edit, Trash } from 'react-feather';

// ** Reactstrap Imports
import {
  Table,
  Badge,
  UncontrolledDropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
} from 'reactstrap';

const TableStriped = ({ data }) => {
  return (
    <Table striped responsive>
      <thead>
        <tr>
          <th>#</th>
          <th>Image</th>
          <th>Title</th>
          <th>Description</th>
          <th>Color</th>
          <th>Total Blogs</th>
          <th>Actions</th>
        </tr>
      </thead>
      {data?.length ? (
        <tbody>
          {data.map((category, index) => (
            <tr>
              <td>{index}</td>
              <td>
                <img
                  className='me-75'
                  src={category?.image ? category?.image : angular}
                  alt='angular'
                  height='180'
                  width='180'
                />
              </td>
              <td>
                <h4>{category.title}</h4>
              </td>
              <td>{category?.details}</td>
              <td>
                <span
                  className='p-2'
                  style={{
                    backgroundColor: category?.color_code
                      ? category?.color_code
                      : '#98AA32',
                  }}
                >
                  {category?.color_code}
                </span>
              </td>
              <td>
                <UncontrolledDropdown>
                  <DropdownToggle
                    className='icon-btn hide-arrow'
                    color='transparent'
                    size='sm'
                    caret
                  >
                    <MoreVertical size={15} />
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem href='/' onClick={(e) => e.preventDefault()}>
                      <Edit className='me-50' size={15} />{' '}
                      <span className='align-middle'>Edit</span>
                    </DropdownItem>
                    <DropdownItem href='/' onClick={(e) => e.preventDefault()}>
                      <Trash className='me-50' size={15} />{' '}
                      <span className='align-middle'>Delete</span>
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </td>
            </tr>
          ))}
        </tbody>
      ) : null}
    </Table>
  );
};

export default TableStriped;
