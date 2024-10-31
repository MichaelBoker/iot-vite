import styled from 'styled-components';

const Wrapper = styled.article`
  background: var(--background-secondary-color);
  border-radius: var(--border-radius);
  display: flex;
  flex-direction: column;
  border-radius: 17px;
  box-shadow: var(--shadow-2);
  position: relative;
  header {
    padding:0.5rem 1.5rem 1rem;
    border-bottom: 1px solid var(--grey-100);
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    .connection{
      position: absolute;
      top: 30px;
    }
  }

  .notifications {
    background: #ff0d0d;
    color: white;
    font-weight: bold;
    border-radius: 100%;
    text-align: center;
    padding-top: 4px;
    position: absolute;
    top: -10px;
    right: -5px;
    font-size: 20px;
    height: 30px;
    width: 30px;
}
  .info {
    padding-left: 25px;
    h5 {
      margin-bottom: 0.5rem;
    }
    p {
      margin: 0;
      text-transform: capitalize;
      letter-spacing: var(--letter-spacing);
      color: var(--text-secondary-color);
    }
  }
  .content {
    padding: 1rem 1.5rem;
    p {
      margin: 0;
      text-transform: capitalize;
      letter-spacing: var(--letter-spacing);
      color: var(--text-secondary-color);
    }
  }
  .status {
    border-radius: var(--border-radius);
    text-transform: capitalize;
    letter-spacing: var(--letter-spacing);
    text-align: center;
    width: 100px;
    height: 30px;
    display: grid;
    align-items: center;
  }
  .actions {
    margin-top: 1rem;
    display: flex;
    align-items: center;
    margin-bottom: 0.5rem;
    margin-left: 0.5rem;
  }
  .edit-btn,
  .delete-btn {
    height: 30px;
    font-size: 0.85rem;
    display: flex;
    align-items: center;
  }
  .info-btn {
    margin-right: 0.5rem;
  }
`;

export default Wrapper;