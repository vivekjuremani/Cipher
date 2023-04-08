import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import styled from 'styled-components';

const Interest = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [State, setState] = useState([
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
  ]);
  const Wrapper = styled.div`
    .jss53 {
      width: 45%;
      display: flex;
      outline: none;
      padding: 2rem;
      position: absolute;
      box-shadow: var(--shadow1);
      border-radius: 1rem;
      flex-direction: column;
      justify-content: space-between;
      background-color: var(--background);
      position: absolute;
      left: 50%;
      top: 45%;
      transform: translate(-50%, -50%);
    }
    @media only screen and (max-width: 900px) {
      .jss53 {
        left: 40%;
        /* width: 80%; */
      }
    }
    @media only screen and (max-width: 750px) {
      .jss53 {
        left: 50%;
      }
    }
    @media only screen and (max-width: 600px) {
      .jss53 {
        left: 55%;
      }
    }
    @media only screen and (max-width: 350px) {
      .jss53 {
        left: 50%;
        width: 80%;
      }
    }
    .im-container {
      grid-gap: 15px;
      display: grid;
      gap: 15px;
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
      max-height: 350px;
      overflow: hidden auto;
    }
    .jss54.jss55 {
      color: white;
      background-color: var(--brand-color);
    }
    .selected {
      background-color: var(--second-white) !important;
      color: black !important;
    }

    .jss54 {
      color: var(--heading);
      width: 100%;
      height: 2rem;
      font-size: 12px;
      box-sizing: border-box;
      font-weight: var(--fw-medium);
      border-radius: 8px;
      background-color: var(--second-white);
    }

    .MuiListItem-gutters {
      padding-left: 1.2rem;
      padding-right: 1.2rem;
    }

    .MuiListItem-root {
      width: 100%;
      display: flex;
      position: relative;
      box-sizing: border-box;
      text-align: left;
      align-items: center;
      padding-top: 0.3rem;
      padding-bottom: 0.3rem;
      justify-content: flex-start;
      text-decoration: none;
    }

    .jss54:hover {
      background-color: orange !important;
    }
  `;
  const data = [
    ' App Development',
    'Game Development',
    'Programming',
    'Data Science',
    'Others',
    'Machine Learning',
    'Data Structures',
    'Web Development',
  ];
  const [state, setstate] = useState(false);
  return (
    <div className='mp-security-box'>
      <div className='mp-top-row'>
        <div className='mp-left-header'>Interests</div>
        <div className='mp-right-header' onClick={handleOpen}>
          Edit
        </div>
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Wrapper>
          <div className='jss53' tabindex='-1'>
            <div className='im-container'>
              {data.map((item, index) => {
                return (
                  <div
                    className={`MuiButtonBase-root MuiListItem-root jss54 im-item-container MuiListItem-gutters MuiListItem-button Mui-selected jss55
                  ${!State[index] && 'selected'} `}
                    tabindex='0'
                    role='button'
                    onClick={() => {
                      var newArr = [...State];
                      newArr[index] = !State[index];
                      setState([...newArr]);
                    }}
                  >
                    <span>{item}</span>
                  </div>
                );
              })}
            </div>
            <div class='pm-pass-btns'>
              <div class='pm-cancel-btns' onClick={handleClose}>
                Cancel
              </div>
              <div class='pm-save-btns' onClick={handleClose}>
                Save
              </div>
            </div>
          </div>
        </Wrapper>
      </Modal>
      <div className='mp-interests-box'>
        {data.map((item, index) => {
          if (!State[index])
            return (
              <div className='mp-interest-btn'>
                <span>{item}</span>
              </div>
            );
        })}
      </div>
    </div>
  );
};
export default Interest;
