import React, { useState } from 'react';
import Modal from '@mui/material/Modal';
import styled from 'styled-components';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
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
  .pdm-input-password {
    background-color: var(--second-white);
  }
  .eye {
    margin-right: 7px;
  }
`;
const data = [
  ' App Development',
  'Game Development',
  'Programming',
  'Data Science',
  'Others',
  'Machine Learning',
  ,
  'Data Structures',
  'Web Development',
];
const Security = () => {
  const [open, setOpen] = React.useState(false);
  const [state, setstate] = useState({
    old_pass: '',
    new_pass: ' ',
    confirm_pass: '',
  });
  const [eye, seteye] = useState([true, true, true]);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [err, seterr] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('hello');
    if (state.new_pass !== state.confirm_pass) {
      seterr(true);
      setTimeout(() => {
        seterr(false);
      }, 3000);
      return;
    }
    handleClose(e);
  };
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setstate({ ...state, [name]: value });
  };
  return (
    <div class='mp-security-box'>
      <div class='mp-top-row'>
        <div class='mp-left-header'>Password &amp; Security</div>
        <div class='mp-right-header' onClick={handleOpen}>
          Change
        </div>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Wrapper>
          <form>
            <div className='jss53' tabindex='-1'>
              <div className='im-container'>
                <div class='jss35' tabindex='-1'>
                  <div class='pdm-login-error'>
                    <span>{err && 'Password does not match'}</span>
                  </div>
                  <div class='pm-input-box'>
                    <div class='pm-input-title'>Current Password</div>
                    <div class='pdm-input-password'>
                      <input
                        id='oldpass'
                        type={!eye[0] ? 'text' : 'password'}
                        name='old_pass'
                        class='pm-input-field'
                        placeholder='Current Password'
                        onChange={handleChange}
                        value={state.old_pass}
                      />
                      <VisibilityOutlinedIcon
                        className='eye'
                        onClick={() => {
                          let newArr = [...eye];
                          newArr[0] = !eye[0];
                          seteye([...newArr]);
                        }}
                      />
                    </div>
                  </div>
                  <div class='pm-input-box'>
                    <div class='pm-input-title'>New Password</div>
                    <div class='pdm-input-password'>
                      <input
                        id='newpass'
                        type={!eye[1] ? 'text' : 'password'}
                        name='new_pass'
                        class='pm-input-field'
                        placeholder='New Password'
                        value={state.new_pass}
                        onChange={handleChange}
                      />{' '}
                      <VisibilityOutlinedIcon
                        className='eye'
                        onClick={() => {
                          let newArr = [...eye];
                          newArr[1] = !eye[1];
                          seteye([...newArr]);
                        }}
                      />
                    </div>
                  </div>
                  <div class='pm-input-box'>
                    <div class='pm-input-title'>Confirm Password</div>
                    <div class='pdm-input-password'>
                      <input
                        id='cnfpass'
                        type={!eye[2] ? 'text' : 'password'}
                        name='confirm_pass'
                        class='pm-input-field'
                        placeholder='Confirm Password'
                        onChange={handleChange}
                        value={state.confirm_pass}
                      />{' '}
                      <VisibilityOutlinedIcon
                        className='eye'
                        onClick={() => {
                          let newArr = [...eye];
                          newArr[2] = !eye[2];
                          seteye([...newArr]);
                        }}
                      />
                    </div>
                  </div>
                  <div class='pm-pass-btns'>
                    <div class='pm-cancel-btns' onClick={handleClose}>
                      Cancel
                    </div>
                    <button
                      class='pm-save-btns'
                      type='submit'
                      onClick={(e) => {
                        handleSubmit(e);
                      }}
                    >
                      Save
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </Wrapper>
      </Modal>
      <div class='mp-links-box'>
        <div class='mp-link'>
          <div class='mp-title'>Password</div>
          <div class='mp-input-link'>
            <input
              type='password'
              class='mp-link-text'
              placeholder='password'
              value='..................'
              disabled=''
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Security;
