import styled from "styled-components";

const Wrapper = styled.nav`
position: sticky;
    top: 0;
    z-index: 9;
  height: var(--nav-height);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.1);
  background: var(--background-secondary-color);
  .nav-center {
    display: flex;
    width: 90vw;
    align-items: center;
    justify-content: space-between;
  }
  .toggle-btn {
    background: transparent;
    border-color: transparent;
    font-size: 2rem;
    color: var(--primary-500);
    cursor: pointer;
    display: flex;
  }
  .logo {
    display: flex;
    align-items: center;
    width: 100px;
  }
  .btn-container {
    display: flex;
    align-items: center;
  }
  .dropdown {
    position: absolute;
    top: 45px;
    text-align: center;
    width: 100%;
    display: none;
    background-color: white;
    padding: 10px;
    box-shadow: 1px 1px 5px 0px #ccc;
    border-radius: 10px;
    button{
      margin: 10px 0;
    }
  }
  .show-dropdown {
    display: block;
  }

  .user-container button {
    box-shadow: var(--shadow-2);
    text-align: center;
    background: var(--primary-500);
    border: unset;
    border-radius: var(--border-radius);
    padding: 0.5rem;
    text-transform: capitalize;
    cursor: pointer;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    gap: 4px;
    color: var(--white);
    font-size: 1rem;
  }

  .user-container button.user {
    font-size: 2rem;
  }

  .user-container {
    position: relative;
  }

  @media (min-width: 992px) {
    .user-container {
      width: 165px;
      margin-top: 10px;
    }
    .dropdown {
      position: absolute;
      top: 55px;
    }
    .nav-center {
      width: 95%;
    }
    .logo {
      display: none;
    }

    .user-container button.user {
      width: 50px;
      float: right;
    }
}
@media (max-width: 992px) {
  .user-container {
    display: flex;
    justify-content: flex-end;
}
.dropdown {
  top: 55px;
    width: 155px;
  }
}

`;
export default Wrapper;
