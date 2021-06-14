import React from 'react'
import {
  CWidgetDropdown,
  CWidgetProgressIcon,
  CWidgetSimple,
  CRow,
  CCol,
  CProgress,
  CDropdown,
  CDropdownMenu,
  CDropdownItem,
  CDropdownToggle
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import ChartLineSimple from '../charts/ChartLineSimple'
import ChartBarSimple from '../charts/ChartBarSimple'



const WidgetsDropdown = () => {
 
  return (
    <CRow>
      <CCol sm="4" lg="3">
        <CWidgetProgressIcon
          header="YTD"
          text="Shipment"
          color="gradient-danger"
          progressSlot={<CProgress color="danger" size="xs" value="65.9" animated className="my-3"
          />}
        >
          <CIcon name="cil-speedometer" height="36" />
        </CWidgetProgressIcon>
      </CCol>
      <CCol sm="4" lg="3">
        <CWidgetSimple header="DC Dispatch" text="90%">
        <CProgress color="danger" size="xs" value="65.9" animated className="my-3"
          />
        </CWidgetSimple>
      </CCol>
      <CCol sm="4" lg="3">
        <CWidgetSimple header="On Time" text="1,123">
          <ChartLineSimple style={{ height: '60px' }} borderColor="info" />
        </CWidgetSimple>
      </CCol>
      <CCol sm="4" lg="3">
        <CWidgetSimple header="Late" text="1,123">
          <ChartLineSimple style={{ height: '60px' }} borderColor="danger" />
        </CWidgetSimple>
      </CCol>
    </CRow>
  )
}

export default WidgetsDropdown;


