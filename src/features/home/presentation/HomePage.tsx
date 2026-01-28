import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@app/hooks";
import { fetchHomeData } from "../application/slice";
import {
  selectWelcomeMessage,
  selectFeatures,
  selectHomeLoading,
  selectHomeError,
} from "../application/selectors";
import { FeatureCard } from "./components/FeatureCard";
import "../styles/home.scss";

const HomePage = () => {
  const dispatch = useAppDispatch();
  const welcomeMessage = useAppSelector(selectWelcomeMessage);
  const features = useAppSelector(selectFeatures);
  const loading = useAppSelector(selectHomeLoading);
  const error = useAppSelector(selectHomeError);

  useEffect(() => {
    dispatch(fetchHomeData());
  }, [dispatch]);

  if (loading) {
    return (
      <div className="home-page home-page--loading">
        <div className="home-page__loader">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="home-page home-page--error">
        <div className="home-page__error">Error: {error}</div>
      </div>
    );
  }

  return (
    <div className="home-page">
      <div className="container">
        <header className="home-page__header">
          <h1 className="home-page__title">{welcomeMessage}</h1>
          <p className="home-page__subtitle">
            Built with React 18, TypeScript, Redux Toolkit, and SCSS
          </p>
        </header>

        <section className="home-page__features">
          <h2 className="home-page__section-title">Key Features</h2>
          <div className="home-page__features-grid">
            {features.map((feature) => (
              <FeatureCard key={feature.id} feature={feature} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default HomePage;
