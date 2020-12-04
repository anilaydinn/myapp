import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import pp from "../static/pp.jpg";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import { getRepos } from "../api";

const useStyles = makeStyles({
  mainContainer: {
    display: "flex",
    justifyContent: "center",
    height: "100vh",
    width: "100%",
    margin: "0px",
  },
  mainWrapper: {
    padding: "15px",
    width: "50%",
    border: "1px solid #CDCDCD",
  },
  heading: {
    display: "flex",
  },
  profilePic: {
    width: "150px",
    height: "150px",
    borderRadius: "90px",
  },
  profileHeadingText: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
    height: "150px",
    alignItems: "center",
    fontSize: "50px",
  },
  socialButtons: {
    display: "grid",
    marginTop: "10px",
    gridTemplateColumns: "auto auto auto auto auto",
    columnGap: "20px",
    justifyContent: "center",
    width: "100%",
  },
  socialButton: {
    cursor: "pointer",
  },
  link: {
    color: "black",
  },
  repos: {
    display: "flex",
    justifyContent: "center",
    marginTop: "20px",
  },
  reposWrapper: {
    width: "75%",
    backgroundColor: "red",
  },
});

export default function Home(props) {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    getReposHandler();
  }, []);

  const getReposHandler = async () => {
    const data = await getRepos();
    setRepos(data);
  };

  const classes = useStyles(props);
  return (
    <div className={classes.mainContainer}>
      <div className={classes.mainWrapper}>
        <div className={classes.heading}>
          <div
            style={{ width: "50%", display: "flex", justifyContent: "center" }}
          >
            <img alt="profile" src={pp} className={classes.profilePic} />
          </div>
          <div className={classes.profileHeadingText}>Anıl Aydın</div>
        </div>

        <div className={classes.socialButtons}>
          <a
            className={classes.link}
            href="https://www.linkedin.com/in/anıl-aydın-65aa13145"
          >
            <LinkedInIcon className={classes.socialButton} />
          </a>
          <a className={classes.link} href="https://github.com/anilaydinn">
            <GitHubIcon className={classes.socialButton} />
          </a>
          <a className={classes.link} href="https://twitter.com/anllaydin">
            <TwitterIcon className={classes.socialButton} />
          </a>
          <a
            className={classes.link}
            href="https://www.instagram.com/anlaydinn/"
          >
            <InstagramIcon className={classes.socialButton} />
          </a>
          <a
            className={classes.link}
            href="https://www.facebook.com/Reypirking/"
          >
            <FacebookIcon className={classes.socialButton} />
          </a>
        </div>

        <div className={classes.repos}>
          <div className={classes.reposWrapper}>
            <div className={classes.reposHeading}>My Github Repositories</div>
            {repos.map((repo) => (
              <div>{repo.name}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
