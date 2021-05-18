import React, { lazy } from 'react'
import usersData from '../users/UsersData'
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

import MainChartExample from '../charts/MainChartExample.js'

const WidgetsDropdown = lazy(() => import('../widgets/WidgetsDropdown.js'))

const getBadge = status => {
  switch (status) {
    case 'Active': return 'success'
    case 'Inactive': return 'secondary'
    case 'Pending': return 'warning'
    case 'Banned': return 'danger'
    default: return 'primary'
  }
}
const fields = ['DC','Volume In', 'Pallets In', 'Volume Out', 'Pallets Out', 'Avg. M3/UL YTD', 'DC + NET Queue', 'Operational Line-Up', 'NET Line-Up']

const PalletOnTheDock = () => {
  return (
    <>
      <WidgetsDropdown />
      <CCard>
        <CCardBody>
          <CRow>
            <CCol sm="5">
              <h4 id="traffic" className="card-title mb-0">Traffic</h4>
              <div className="small text-muted">March 2021</div>
            </CCol>
            <CCol sm="7" className="d-none d-md-block">
              <CButton color="primary" className="float-right">
                <CIcon name="cil-cloud-download"/>
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
          <MainChartExample style={{height: '300px', marginTop: '40px'}}/>
        </CCardBody>
        <CCardFooter>
          <CRow className="text-center">
            <CCol md sm="12" className="mb-sm-2 mb-0">
              <div className="text-muted">Visits</div>
              <strong>29.703 Users (40%)</strong>
              <CProgress
                className="progress-xs mt-2"
                precision={1}
                color="success"
                value={40}
              />
            </CCol>
            <CCol md sm="12" className="mb-sm-2 mb-0 d-md-down-none">
              <div className="text-muted">Unique</div>
              <strong>24.093 Users (20%)</strong>
              <CProgress
                className="progress-xs mt-2"
                precision={1}
                color="info"
                value={40}
              />
            </CCol>
            <CCol md sm="12" className="mb-sm-2 mb-0">
              <div className="text-muted">Pageviews</div>
              <strong>78.706 Views (60%)</strong>
              <CProgress
                className="progress-xs mt-2"
                precision={1}
                color="warning"
                value={40}
              />
            </CCol>
            <CCol md sm="12" className="mb-sm-2 mb-0">
              <div className="text-muted">New Users</div>
              <strong>22.123 Users (80%)</strong>
              <CProgress
                className="progress-xs mt-2"
                precision={1}
                color="danger"
                value={40}
              />
            </CCol>
            <CCol md sm="12" className="mb-sm-2 mb-0 d-md-down-none">
              <div className="text-muted">Bounce Rate</div>
              <strong>Average Rate (40.15%)</strong>
              <CProgress
                className="progress-xs mt-2"
                precision={1}
                value={40}
              />
            </CCol>
          </CRow>
        </CCardFooter>
      </CCard>

      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
              IKEA {' - '} North America
            </CCardHeader>
            <CCardBody>
              <CRow>
                <CCol xs="12" md="6" xl="6">
                  <CRow>
                    <CCol sm="6">
                      <CCallout color="info">
                        <small className="text-muted">VOLUME IN</small>
                        <br />
                        <strong className="h4">73,214</strong>
                      </CCallout>
                    </CCol>
                    <CCol sm="6">
                      <CCallout color="info">
                        <small className="text-muted">PALLETS IN</small>
                        <br />
                        <strong className="h4">97,109</strong>
                      </CCallout>
                    </CCol>
                  </CRow>
                  <hr className="mt-0" />
                </CCol>
                <CCol xs="12" md="6" xl="6">
                  <CRow>
                    <CCol sm="6">
                      <CCallout color="danger">
                        <small className="text-muted">VOLUME OUT</small>
                        <br />
                        <strong className="h4">77,447</strong>
                      </CCallout>
                    </CCol>
                    <CCol sm="6">
                      <CCallout color="danger">
                        <small className="text-muted">PALLETS OUT</small>
                        <br />
                        <strong className="h4">108,778</strong>
                      </CCallout>
                    </CCol>
                  </CRow>
                  <hr className="mt-0" />
                </CCol>
              </CRow>

              <br />
              
              <CRow>
                <CCol>
                  <CCard>
                    <CCardHeader>
                      North America Page 1
                    </CCardHeader>
                    <CCardBody>
                    <CDataTable
                      items={usersData}
                      fields={fields}
                      hover
                      striped
                      bordered
                      size="sm"
                      itemsPerPage={10}
                      pagination
                      scopedSlots = {{
                        'status':
                          (item)=>(
                            <td>
                              <CBadge color={getBadge(item.status)}>
                                {item.status}
                              </CBadge>
                            </td>
                          )
                      }}
                    />
                    </CCardBody>
                  </CCard>
                </CCol>
              </CRow>


            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default PalletOnTheDock;
