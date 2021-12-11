import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import CIcon from '@coreui/icons-react'
import {
  cilCog,
  cilSync,
  cilShareAlt,
  cilBan,
  cilLockUnlocked,
  cilUserX,
  cilSettings,
} from '@coreui/icons'
import { CCard, CCardBody, CCardHeader, CCardTitle } from '@coreui/react'
import { useListUserQuery } from '../../../store/api/users'

export default function UserActions({ tenantDomain, userId }) {
  const { data: user, isFetching, error } = useListUserQuery({ tenantDomain, userId })

  // @TODO make these work
  const handlePush = () => {
    alert('pushy')
    // api/ExecSendPush?TenantFilter= + TenantID + &UserEmail= + EmailAddress
  }

  const handleConvert = () => {
    alert('converty')
    // api/ExecConvertToSharedMailbox?TenantFilter= + TenantID + &ID= + UserID
  }

  const handleDisable = () => {
    alert('disabley')
    // api/ExecDisableUser?TenantFilter= + TenantID + &ID= + UserID
  }

  const handleResetPassword = () => {
    alert('resetty')
    // api/ExecResetPass?TenantFilter= + TenantID + &ID= + UserID
  }

  const handleDelete = () => {
    alert('deletey')
    // api/RemoveUser?TenantFilter= + TenantID + &ID= + UserID
  }

  return (
    <CCard>
      <CCardHeader className="d-flex justify-content-between">
        <CCardTitle>Actions</CCardTitle>
        <CIcon icon={cilSettings} />
      </CCardHeader>
      <CCardBody>
        <Link
          className="dropdown-item"
          to={`/identity/administration/users/edit?tenantDomain=${tenantDomain}&userId=${userId}`}
        >
          <CIcon icon={cilCog} className="me-2" />
          Edit User
        </Link>
        <Link className="dropdown-item" onClick={handlePush}>
          <CIcon icon={cilSync} className="me-2" />
          Send MFA Push to User
        </Link>
        <Link className="dropdown-item" onClick={handleConvert}>
          <CIcon icon={cilShareAlt} className="me-2" />
          Convert to Shared Mailbox
        </Link>
        <Link className="dropdown-item" onClick={handleDisable}>
          <CIcon icon={cilBan} className="me-2" />
          Block Sign In
        </Link>
        <Link className="dropdown-item" onClick={handleResetPassword}>
          <CIcon icon={cilLockUnlocked} className="me-2" />
          Reset Password
        </Link>
        <Link className="dropdown-item" onClick={handleDelete}>
          <CIcon icon={cilUserX} className="me-2" />
          Delete User
        </Link>
      </CCardBody>
    </CCard>
  )
}

UserActions.propTypes = {
  tenantDomain: PropTypes.string.isRequired,
  userId: PropTypes.string.isRequired,
}
