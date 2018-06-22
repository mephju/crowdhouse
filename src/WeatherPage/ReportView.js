import React from 'react'
import PropTypes from 'prop-types'
import styled from  'styled-components'
import {Small as SmallTitle} from '../views/Title'

const ReportTitle = SmallTitle.extend`
  border-bottom: 2px solid rgba(255, 255, 255, 0.1);
  padding-bottom: 20px;
`

const  ReportWrapper = styled.div`
  flex-grow: 1;
  padding: 20px;
`

const ReportView = props => {
  return <ReportWrapper>
    <ReportTitle> {props.title} </ReportTitle>
    {props.children}
  </ReportWrapper>
}

ReportView.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

export default ReportView