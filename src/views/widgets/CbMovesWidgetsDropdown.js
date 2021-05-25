import React from 'react'
import {
  CWidgetDropdown,
  CWidgetSimple,
  CRow,
  CCol,
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
      <CCol sm="4" lg="4">
        <CWidgetSimple header="total moves" text="1,158">
        </CWidgetSimple>
      </CCol>

      <CCol sm="4" lg="4">
        <CWidgetSimple header="first shift moves" text="705">
        </CWidgetSimple>
      </CCol>

      <CCol sm="4" lg="4">
        <CWidgetSimple header="Second shift moves" text="449">
        </CWidgetSimple>
      </CCol>
    </CRow>
  )
}



export default WidgetsDropdown;


