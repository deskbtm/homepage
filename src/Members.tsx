import React, { FC, useEffect } from "react";
import axios from "axios";
export const Members: FC = function () {
  useEffect(() => {
    (async () => {
      const data = await axios.get(
        "https://api.github.com/orgs/deskbtm/members"
      );
      console.log(data);
    })();
  }, []);

  return <div></div>;
};
