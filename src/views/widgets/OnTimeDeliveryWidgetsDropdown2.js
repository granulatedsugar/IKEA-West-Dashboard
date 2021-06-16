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
          progressSlot={<CProgress color="success" size="xs" value="88" animated className="my-3"
          />}
        >
          <CIcon name="cil-speedometer" height="36" />
        </CWidgetProgressIcon>
      </CCol>
      <CCol sm="4" lg="3">
        <CWidgetProgressIcon
          header="90% On Time"
          text="DC Dispatch"
          color="gradient-danger"
          progressSlot={<CProgress color="success" size="xs" value="90" animated className="my-3"
          />}
        >
          <CIcon name="cil-grid" height="36" />
        </CWidgetProgressIcon>
      </CCol>
      <CCol sm="4" lg="3">
        <CWidgetProgressIcon
          header="75% On Time"
          text="Transport"
          color="gradient-danger"
          progressSlot={<CProgress color="danger" size="xs" value="75" animated className="my-3"
          />}
        >
          <CIcon name="cil-truck" height="36" />
        </CWidgetProgressIcon>
      </CCol>
      <CCol sm="4" lg="3">
        <CWidgetProgressIcon
          header="99% On Time"
          text="Store Unload"
          color="gradient-danger"
          progressSlot={<CProgress color="success" size="xs" value="99" animated className="my-3"
          />}
        >
          <CIcon name="cil-cart" height="36" />
        </CWidgetProgressIcon>
      </CCol>
    </CRow>
  )
}

export default WidgetsDropdown;


