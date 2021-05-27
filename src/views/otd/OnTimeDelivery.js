import React, { lazy } from 'react'
import potdData from '../data/PotdData'
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

import MainChartExample from '../charts/PotdMainChart.js'

const WidgetsDropdown = lazy(() => import('../widgets/OnTimeDeliveryWidgetsDropdown.js'))

const fields = ['Module','North Gates', 'South Gates']

const syncDate = new Date().toLocaleString() // Timestamp of last update.

const OnTimeDelivery = () => {
  return (
    <>
      <WidgetsDropdown />
      <CCard>
        <CCardBody>
          <CRow>
            <CCol sm="5">
              <h4 id="traffic" className="card-title mb-0">Pallets on the Dock History</h4>
              <div className="small text-muted">May 2021</div>
            </CCol>
            <CCol sm="7" className="d-none d-md-block">
              <CButton color="primary" className="float-right">
                <CIcon name="cil-cloud-download"/>
              </CButton>
              <CButtonGroup className="float-right mr-3">
                {
                  ['Week', 'Month', 'Year'].map(value => (
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
              <div className="text-muted">IKEA</div>
              <strong>269 Regular (11%)</strong>
              <CProgress
                className="progress-xs mt-2"
                precision={1}
                color="success"
                value={11}
              />
            </CCol>
            <CCol md sm="12" className="mb-sm-2 mb-0 d-md-down-none">
              <div className="text-muted">IKEA</div>
              <strong>16 Tall (1%)</strong>
              <CProgress
                className="progress-xs mt-2"
                precision={1}
                color="info"
                value={1}
              />
            </CCol>
            <CCol md sm="12" className="mb-sm-2 mb-0">
              <div className="text-muted">EURO</div>
              <strong>1276 Regular (52%)</strong>
              <CProgress
                className="progress-xs mt-2"
                precision={1}
                color="warning"
                value={52}
              />
            </CCol>
            <CCol md sm="12" className="mb-sm-2 mb-0">
              <div className="text-muted">EURO</div>
              <strong>65 Tall (3%)</strong>
              <CProgress
                className="progress-xs mt-2"
                precision={1}
                color="danger"
                value={3}
              />
            </CCol>
            <CCol md sm="12" className="mb-sm-2 mb-0">
              <div className="text-muted">Half Pallet</div>
              <strong>502 (21%)</strong>
              <CProgress
                className="progress-xs mt-2"
                precision={1}
                value={21}
              />
            </CCol>
            <CCol md sm="12" className="mb-sm-2 mb-0">
              <div className="text-muted">Narrow Pallet</div>
              <strong>318 (13%)</strong>
              <CProgress
                className="progress-xs mt-2"
                precision={1}
                value={13}
              />
            </CCol>  
          </CRow>
        </CCardFooter>
      </CCard>

      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
              <h4 className="card-title mb-0">Pallet by Module</h4>
            </CCardHeader>
            <CCardBody>
              <CRow>
                <CCol>
                  <CCard>
                    <CCardBody>
                    <CDataTable
                      items={potdData}
                      fields={fields}
                      hover
                      striped
                      bordered
                      size="lg"
                      itemsPerPage={10}
                      pagination
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
        </CCol>
      </CRow>
    </>
  )
}

export default OnTimeDelivery;
