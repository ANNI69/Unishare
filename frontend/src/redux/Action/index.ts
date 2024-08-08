// export const register =
//   (username: string, email: string, password: string) =>
//   async (dispatch: Dispatch) => {
//     try {
//       const res = await axios.post("/api/auth/register", {
//         username,
//         email,
//         password,
//       });

//       dispatch({
//         type: REGISTER_SUCCESS,
//         payload: res.data,
//       });

//       dispatch(loadUser());
//     } catch (err) {
//       dispatch({
//         type: REGISTER_FAIL,
//       });
//     }
//   };
