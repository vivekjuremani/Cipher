import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import Modal from '@mui/material/Modal';
import styled from 'styled-components';
import { useState } from 'react';
import { Link } from 'react-router-dom';
const Wrapper = styled.div`
  .jss53 {
    /* width: calc(100% - 30px); */
    display: flex;
    outline: none;
    overflow: hidden;
    position: absolute;
    box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2),
      0px 5px 8px 0px rgba(0, 0, 0, 0.14), 0px 1px 14px 0px rgba(0, 0, 0, 0.12);
    max-height: calc(100vh - 30px);
    border-radius: 10px;
    flex-direction: column;
    justify-content: space-between;
    background-color: var(--background);
    left: 28%;
    top: 17%;
  }
  @media only screen and (max-width: 900px) {
    .jss53 {
      left: 15%;
      /* width: 80%; */
    }
  }
  @media only screen and (max-width: 750px) {
    .jss53 {
      left: 9%;
    }
  }
  @media only screen and (max-width: 600px) {
    .jss53 {
      left: 10%;
      width: 80%;
    }
  }
  @media only screen and (max-width: 350px) {
    .jss53 {
      left: 5%;
      width: 90%;
    }
  }
  .ep-input-box {
    margin-right: 1.5rem;
  }
  .ep-user-profile-pencil {
    position: absolute;
    left: 25%;
  }
`;
const UserInfo = () => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [state, setstate] = useState({
    avatar: '',
    fname: '',
    lname: '',
    email: '',
    mobileno: '',
  });
  const handleImgChange = (event) => {
    let reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);

    reader.onload = (e) => {
      let img = e.target.result;
      setstate({ ...state, avatar: img });
    };
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setstate({ ...state, [name]: value });
  };
  return (
    <div className='pf-user-box'>
      <div className='pf-user-back'>
        <div className='pf-user-content'>
          <div className='pf-user-profile-box'>
            <img
              class='MuiAvatar-root MuiAvatar-circular pf-user-profile MuiAvatar-colorDefault'
              src={state.avatar}
              style={{ borderRadius: '50%' }}
            />
            <div className='pf-user-profile-pencil' onClick={handleOpen}>
              <svg
                viewBox='0 0 27 27'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                className='pf-profile-pencil-icon'
              >
                <path
                  d='M1.61176 17.6959L0.0393491 24.4821C-0.0148937 24.7301 -0.0130342 24.9872 0.0447916 25.2345C0.102617 25.4817 0.214949 25.713 0.37358 25.9112C0.532211 26.1095 0.733134 26.2699 0.961672 26.3806C1.19021 26.4913 1.44059 26.5495 1.69452 26.551C1.81284 26.563 1.93206 26.563 2.05038 26.551L8.87795 24.9786L21.9869 11.9194L14.671 4.62006L1.61176 17.6959Z'
                  fill='                                           var(--common-text-color)'
                ></path>
                <path
                  d='M26.1082 5.38144L21.2255 0.498692C20.9045 0.179298 20.4701 0 20.0172 0C19.5644 0 19.13 0.179298 18.809 0.498692L16.0945 3.21317L23.402 10.5207L26.1165 7.80626C26.2754 7.6466 26.4012 7.45718 26.4868 7.24885C26.5723 7.04052 26.616 6.81735 26.6152 6.59213C26.6144 6.36691 26.5693 6.14405 26.4823 5.93631C26.3953 5.72856 26.2682 5.54001 26.1082 5.38144Z'
                  fill='var(--common-text-color)'
                ></path>
              </svg>
            </div>
          </div>
          <div className='pf-user-details'>
            <div className='pf-user-detail-box'>
              <div id='pf-user-side'>
                <h2 className='pf-user-greeting'>Hello,</h2>
                <h1 className='pf-user-name'>
                  {state.fname} {state.lname}
                </h1>
                <h2 className='pf-user-email'>{state.email}</h2>
              </div>
              <div className='pf-right-side'>
                <Link to='/follower'>
                  <div className='pf-user-followers-count' title='Followers'>
                    <span>0</span> Followers
                  </div>
                </Link>
              </div>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby='modal-modal-title'
                aria-describedby='modal-modal-description'
              >
                <Wrapper>
                  <form onSubmit={handleSubmit}>
                    <div className='jss53' tabindex='-1'>
                      <div class='ca-container'>
                        <div class='ca-header sn-header'>
                          <span>Profile Update</span>
                          <span class='ep-close-icon'>
                            <CloseIcon />
                          </span>
                        </div>
                        <div class='ep-container'>
                          <div class='ep-left-container'>
                            <div class='ep-user-profile-box'>
                              <div class='MuiAvatar-root MuiAvatar-circular ep-user-profile MuiAvatar-colorDefault'>
                                <img
                                  class='MuiAvatar-root MuiAvatar-circular ep-user-profile MuiAvatar-colorDefault MuiSvgIcon-root MuiAvatar-fallback'
                                  src={state.avatar}
                                  style={{ borderRadius: '50%' }}
                                />
                              </div>
                              <div class='MuiAvatar-root MuiAvatar-circular ep-user-profile MuiAvatar-colorDefault'></div>
                              <div
                                role='button'
                                tabindex='0'
                                class='ep-user-profile-pencil'
                                aria-controls='filename'
                              >
                                <input
                                  multiple=''
                                  type='file'
                                  autocomplete='off'
                                  tabindex='-1'
                                  style={{ display: 'none' }}
                                  onChange={handleImgChange}
                                  id='file-input'
                                />
                                <label for='file-input'>
                                  <EditRoundedIcon />
                                </label>
                              </div>
                            </div>
                          </div>
                          <div class='ep-right-container'>
                            <div class='ep-input-box'>
                              <div class='ep-input-title'>First Name</div>
                              <input
                                class='ep-input-field'
                                type='name'
                                name='fname'
                                onChange={handleChange}
                                placeholder='First Name'
                                value={state.fname}
                              />
                            </div>
                            <div class='ep-input-box'>
                              <div class='ep-input-title'>Last Name</div>
                              <input
                                class='ep-input-field'
                                type='name'
                                name='lname'
                                placeholder='Last Name'
                                onChange={handleChange}
                                value={state.lname}
                              />
                            </div>
                            <div class='ep-input-box'>
                              <div class='ep-input-title'>Email Address</div>
                              <input
                                class='ep-input-field'
                                type='email'
                                placeholder='Email Address'
                                name='email'
                                onChange={handleChange}
                                value={state.email}
                              />
                            </div>
                            <div class='ep-input-box'>
                              <div class='ep-input-title'>Mobile Number</div>
                              <input
                                class='ep-input-field'
                                type='text'
                                name='mobileno'
                                placeholder='Mobile Number'
                                onChange={handleChange}
                                value={state.mobileno}
                              />
                            </div>
                          </div>
                        </div>
                        <div class='sf-btns-cont'>
                          <button
                            class='sf-msg-btn1 sf-btn-active'
                            onClick={handleClose}
                          >
                            Cancel
                          </button>
                          <button
                            type='submit'
                            class='sf-msg-btn sf-btn-active'
                            onClick={handleClose}
                          >
                            Save
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </Wrapper>
              </Modal>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
