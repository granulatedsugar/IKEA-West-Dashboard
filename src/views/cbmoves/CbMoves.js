import React, { lazy } from 'react'
import cbNewMovesData from '../data/CbNewMovesData'
import nonCbNewMovesData from '../data/NonCbNewMovesData'
import {
  CBadge,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CProgress,
  CRow,
  CCallout,
  CDataTable
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

import CbMoveHistory from '../charts/CBMoveHistory'

const WidgetsDropdown = lazy(() => import('../widgets/CbMovesWidgetsDropdown.js'))

const getBadge = status => {
  switch (status) {
    case 'Active': return 'success'
    case 'Inactive': return 'secondary'
    case 'Pending': return 'warning'
    case 'Banned': return 'danger'
    default: return 'primary'
  }
}

const fields = ['Shift', '1 Pallet', '2 Pallets', '3 Pallets', '4 Pallets']

const syncDate = new Date().toLocaleString() // Timestamp of last update.

const CbMoves = (props) => {
  return (
    <>
      <CCard>
        <CCardHeader>
          <h4 className="card-title mb-2">CBNEW Multicycle</h4>
        </CCardHeader>
        <CCardBody>
          <WidgetsDropdown />
          <CRow>
                <CCol>
                  <CCard>
                    <CCardBody>
                      <CDataTable
                        items={cbNewMovesData}
                        fields={fields}
                        hover
                        striped
                        bordered
                        size="lg"
                        itemsPerPage={10}
                        pagination
                        scopedSlots={{
                          'status':
                            (item) => (
                              <td>
                                <CBadge color={getBadge(item.status)}>
                                  {item.status}
                                </CBadge>
                              </td>
                            )
                        }}
                      />
                    </CCardBody>
                    <CCardFooter>
                      Last Update: {syncDate}
                    </CCardFooter>
                  </CCard>
                </CCol>
              </CRow>
              <CRow>
            <CCol sm="5">
              <h4 id="traffic" className="card-title mb-0">CB Moves History</h4>
              <div className="small text-muted">May 2021</div>
            </CCol>
            <CCol sm="7" className="d-none d-md-block">
              <CButton color="primary" className="float-right">
                <CIcon name="cil-cloud-download" />
              </CButton>
              <CButtonGroup className="float-right mr-3">
                {
                  ['Day', 'Month', 'Year'].map(value => (
                    <CButton
                      color="outline-secondary"
                      key={value}
                      className="mx-0"
                      active={value === 'Month'}
                    >
                      {value}
                    </CButton>
                  ))
                }
              </CButtonGroup>
            </CCol>
          </CRow>
          <CbMoveHistory style={{ height: '300px', marginTop: '40px' }} />
        </CCardBody>
      </CCard>
      <CCard>
        <CCardHeader>
          <h4 className="card-title mb-2">Non-CBNEW Multicycle</h4>
        </CCardHeader>
        <CCardBody>
          <WidgetsDropdown />
          <CRow>
                <CCol>
                  <CCard>
                    <CCardBody>
                      <CDataTable
                        items={nonCbNewMovesData}
                        fields={fields}
                        hover
                        striped
                        bordered
                        size="lg"
                        itemsPerPage={10}
                        pagination
                        scopedSlots={{
                          'status':
                            (item) => (
                              <td>
                                <CBadge color={getBadge(item.status)}>
                                  {item.status}
                                </CBadge>
                              </td>
                            )
                        }}
                      />
                    </CCardBody>
                    <CCardFooter>
                      Last Update: {syncDate}
                    </CCardFooter>
                  </CCard>
                </CCol>
              </CRow>
        </CCardBody>
      </CCard>
    </>
  )
}

export default CbMoves;
