import React from 'react'
import { Dropdown } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import styled from 'styled-components';

const countryOptions = [
  { key: '백엔드', value: '백엔드', text: '백엔드' },
  { key: '프론트엔드', value: '프론트엔드', text: '프론트엔드' },
  { key: '풀스택', value: '풀스택', text: '풀스택' },
  { key: '보안', value: '보안', text: '보안' },
  { key: '빅데이터', value: '빅데이터', text: '빅데이터' },
  { key: '안드로이드', value: '안드로이드', text: '안드로이드' },
  { key: 'ai', value: 'ai', flag: 'ai', text: 'Anguilla' },
]

const DropdownSearchSelection = () => (
    <DropdownDiv>
        <Dropdown
        placeholder='Select Country'
        fluid
        search
        selection
        options={countryOptions}
        />
    </DropdownDiv>
)

export default DropdownSearchSelection

// styled-components

const DropdownDiv = styled.div`
    width: 500px;

    margin: 100px auto;
`;

