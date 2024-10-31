import styled from "styled-components";

const Wrapper = styled.aside`
.mobile {
    position: fixed;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.7);
    display: flex;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    display: none;
    z-index: 99;
  }
  .mobile:has(.show-sidebar) {
    display: flex;
  }
  .close-btn {
    border: unset;
    font-size: 1.75rem;
  }
  .logo {
    width: 100%;
  }
  header {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    max-width: 130px;
    margin: 0 auto;
  }
  .links {
    display: flex;
    flex-direction: column;
  }
  .icon {
    font-size: 1.5rem;
    margin-right: 1rem;
  }
  .links a {
    color: var(--grey-700);
    padding: 1rem 0px 1rem 2rem;
    transition: padding-left 0.3s ease-in-out 0s;
    display: flex;
    align-items: center;
  }
  .sidebar-container {
    background: var(--background-secondary-color);
    width: var(--fluid-width);
    height: 95vh;
    border-radius: var(--border-radius);
    padding: 4rem 2rem;
    position: relative;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    flex-direction: column;
  }
  .close-btn {
    position: absolute;
    top: 20px;
    left: 20px;
    background: transparent;
    font-size: 2rem;
}
.desktop{
    position: sticky;
    top: 0;
}
  @media (min-width: 992px) {
    .close-btn {
      display: none;
    }

    .sidebar-container {
      background: var(--background-secondary-color);
      min-height: 100vh;
      height: 100%;
      width: 275px;
      margin-left: -275px;
      transition: margin-left 0.3s ease-in-out 0s;
    }
    .show-sidebar {
      margin-left: 0;
    }

    .links a:hover {
      padding-left: 3rem;
      color: var(--primary-500);
      transition: var(--transition);
    }
    .links a{
        width: 235px;
    }
    .links a.active {
        padding-left: 3rem;
        color: var(--primary-500);
    }
  }
`;

export default Wrapper;
