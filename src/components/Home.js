import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import pp from "../static/pp.jpg";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import { getRepos } from "../api";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    display: "flex",
    justifyContent: "center",
    height: "100vh",
    width: "100%",
    margin: "0px",
  },
  mainWrapper: {
    padding: "15px",
    width: "75%",
    maxHeight: "950px",
    overflowY: "scroll",
    overflow: "auto",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  heading: {
    display: "block",
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
    marginBottom: "20px",
    fontSize: "50px",
    [theme.breakpoints.down("xs")]: {
      fontSize: "35px",
    },
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
    fontSize: "40px",
    [theme.breakpoints.down("xs")]: {
      fontSize: "30px",
    },
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
    fontSize: "35px",
  },
  reposHeading: {
    textAlign: "center",
    marginTop: "50px",
    [theme.breakpoints.down("xs")]: {
      fontSize: "18px",
      marginTop: "15px",
    },
  },
  repoItem: {
    borderRadius: "3px",
    display: "flex",
    width: "100%",
    backgroundColor: "#eae8e7",
    height: "200px",
    marginTop: "10px",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },
  reposContainer: {
    marginTop: "20px",
  },
  repoImg: {
    display: "flex",
    width: "33%",
    justifyContent: "center",
    alignItems: "center",
  },
  repoHeading: {
    marginTop: "20px",
    display: "flex",
    justifyContent: "center",
    fontSize: "22px",
    fontFamily: "Open Sans",
    [theme.breakpoints.down("xs")]: {
      fontSize: "14px",
    },
  },
  repoTextPart: {
    width: "67%",
    height: "100%",
  },
  seeOnGithubButton: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
    textAlign: "center",
    width: "120px",
    height: "45px",
    color: "#FFF",
    fontSize: "16px",
    borderRadius: "10px",
    cursor: "pointer",
    [theme.breakpoints.down("xs")]: {
      width: "90px",
      height: "40px",
      fontSize: "12px",
    },
  },
  textContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
}));

export default function Home(props) {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    getReposHandler();
  }, []);

  const getReposHandler = async () => {
    const data = await getRepos();
    setRepos(data);
  };

  console.log(repos);

  const classes = useStyles(props);
  return (
    <div className={classes.mainContainer}>
      <div className={classes.mainWrapper}>
        <div className={classes.heading}>
          <div
            style={{
              marginBottom: "20px",
              width: "100%",
              display: "flex",
              justifyContent: "center",
            }}
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
            <div className={classes.reposContainer}>
              {repos.map((repo) => (
                <div className={classes.repoItem} key={repo.id}>
                  <div className={classes.repoImg}>
                    <GitHubIcon style={{ fontSize: "50px" }} />
                  </div>
                  <div className={classes.repoTextPart}>
                    <div className={classes.repoHeading}>{repo.name}</div>
                    <div className={classes.textContainer}>
                      <a
                        style={{ textDecoration: "none" }}
                        href={repo.html_url}
                      >
                        <div className={classes.seeOnGithubButton}>
                          See On Github
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
