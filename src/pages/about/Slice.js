import sliceAnnotationLarge from 'assets/slice-annotation-large.png';
import sliceAnnotationPlaceholder from 'assets/slice-annotation-placeholder.png';
import sliceAnnotation from 'assets/slice-annotation.png';
import sliceAppLarge from 'assets/slice-app-large.jpg';
import sliceAppPlaceholder from 'assets/slice-app-placeholder.jpg';
import sliceApp from 'assets/slice-app.jpg';
import sliceBackgroundBarLarge from 'assets/slice-background-bar-large.jpg';
import sliceBackgroundBarPlaceholder from 'assets/slice-background-bar-placeholder.jpg';
import sliceBackgroundBar from 'assets/slice-background-bar.jpg';
import sliceBackgroundLarge from 'assets/slice-background-large.jpg';
import sliceBackgroundPlaceholder from 'assets/slice-background-placeholder.jpg';
import sliceBackground from 'assets/slice-background.jpg';
import sliceIrlPlaceholder from 'assets/slice-irl-placeholder.jpg';
import sliceIrl from 'assets/slice-irl.jpg';
import sliceSidebarAnnotationsLarge from 'assets/slice-sidebar-annotations-large.png';
import sliceSidebarAnnotationsPlaceholder from 'assets/slice-sidebar-annotations-placeholder.png';
import sliceSidebarAnnotations from 'assets/slice-sidebar-annotations.png';
import sliceSidebarLayersLarge from 'assets/slice-sidebar-layers-large.png';
import sliceSidebarLayersPlaceholder from 'assets/slice-sidebar-layers-placeholder.png';
import sliceSidebarLayers from 'assets/slice-sidebar-layers.png';
import sliceSlidesLarge from 'assets/slice-slides-large.jpg';
import sliceSlidesPlaceholder from 'assets/slice-slides-placeholder.jpg';
import sliceSlides from 'assets/slice-slides.jpg';
import { Footer } from 'components/Footer';
import { Image } from 'components/Image';
import { Meta } from 'components/Meta';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectImage,
  ProjectSection,
  ProjectSectionColumns,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from 'layouts/Project';
import { Fragment } from 'react';
import { media } from 'utils/style';
import styles from './Slice.module.css';

const title = 'Инфоирмация за фирмата и как процедираме';
const description =
  'Бла бла информация, бла бла, тука данчо тря да си го оправи. Бла бла информация, бла бла, тука данчо тря да си го оправи';
const roles = ['Бързо', 'Качествено', 'Евтино'];

export const About = () => {
  return (
    <Fragment>
      <Meta title={title} prefix="Projects" description={description} />
      <ProjectContainer className={styles.slice}>
        {/* <ProjectBackground
          src={sliceBackground}
          srcSet={`${sliceBackground.src} 1280w, ${sliceBackgroundLarge.src} 2560w`}
          placeholder={sliceBackgroundPlaceholder}
          opacity={0.8}
        /> */}
        <ProjectHeader
          title={title}
          description={description}
          roles={roles}
        />
        <ProjectSection padding="top">
          <ProjectSectionContent>
            {/* <ProjectImage
              srcSet={[sliceApp, sliceAppLarge]}
              placeholder={sliceAppPlaceholder}
              alt="The Slice web application showing a selected user annotation."
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 90vw, 80vw`}
            /> */}
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionColumns centered className={styles.columns}>
            <div className={styles.imagesText}>
              <ProjectSectionHeading>В самото начало</ProjectSectionHeading>
              <ProjectSectionText>
              Добре дошли в нашия онлайн магазин за професионален ремонт на битова техника! Ние сме вашите надеждни партньори в поддръжката на перални, хладилници, и различни други уреди в дома ви. Създадени сме с една цел - да ви осигурим бърз, качествен и надежден сервиз, който да възстанови функционалността на вашите любими електроуреди.
              </ProjectSectionText>
              <ProjectSectionText>
                Our solution was to allow users to be invited to a layer, where they can
                see others’ annotations and make their own.
              </ProjectSectionText>
            </div>
            <div className={styles.sidebarImages}>
              {/* <Image
                className={styles.sidebarImage}
                srcSet={[sliceSidebarLayers, sliceSidebarLayersLarge]}
                placeholder={sliceSidebarLayersPlaceholder}
                alt="The layers sidebar design, now with user profiles."
                sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
              /> */}
              {/* <Image
                className={styles.sidebarImage}
                srcSet={[sliceSidebarAnnotations, sliceSidebarAnnotationsLarge]}
                placeholder={sliceSidebarAnnotationsPlaceholder}
                alt="Multiple user annotations on a shared layer."
                sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
              /> */}
            </div>
          </ProjectSectionColumns>
        </ProjectSection>
        <ProjectSection light>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Методи на ремонт</ProjectSectionHeading>
              <ProjectSectionText>
              Завършените проекти и дългогодишният ни опит в областта на ремонта на битова техника говорят за нашата професионалност и преданост към клиентите ни. Нашите лицензирани техници разполагат с необходимите знания и умения, за да се справят с всякакви предизвикателства, пред които може да ви изправи неизправна техника.
              </ProjectSectionText>
            </ProjectTextRow>
            {/* <Image
              srcSet={[sliceSlides, sliceSlidesLarge]}
              placeholder={sliceSlidesPlaceholder}
              alt="The new My Slides tab in slice, showing annotated and favorited slides."
              sizes={`(max-width: ${media.mobile}px) 500px, (max-width: ${media.tablet}px) 800px, 1000px`}
            /> */}
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection padding="top">
          <ProjectSectionContent className={styles.grid}>
            <div className={styles.gridImage}>
              {/* <div className={styles.gridBackground}>
                <Image
                  srcSet={[sliceBackgroundBar, sliceBackgroundBarLarge]}
                  placeholder={sliceBackgroundBarPlaceholder}
                  alt=""
                  role="presentation"
                  sizes={`(max-width: ${media.mobile}px) 312px, (max-width: ${media.tablet}px) 408px, 514px`}
                />
              </div>
              <div className={styles.gridForeground}>
                <Image
                  srcSet={[sliceAnnotation, sliceAnnotationLarge]}
                  placeholder={sliceAnnotationPlaceholder}
                  alt="An annotation preview popover with statistics for shape perimeter and area."
                  sizes={`(max-width: ${media.mobile}px) 584px, (max-width: ${media.tablet}px) 747px, 556px`}
                />
              </div> */}
            </div>
            <div className={styles.gridText}>
              <ProjectSectionHeading>Топ решения</ProjectSectionHeading>
              <ProjectSectionText>
              При нас можете да очаквате бърза реакция, точна диагностика и ефективно решение на проблема. Вярваме, че качественият ремонт на битова техника не само възстановява уредите ви, но и връща комфорта в ежедневието ви.
              </ProjectSectionText>
            </div>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Като за финал</ProjectSectionHeading>
              <ProjectSectionText>
              Освен това, предлагаме конкурентни цени и гъвкави пакети за обслужване, които са напълно адаптирани към вашите нужди. Доверете се на нас и отново се наслаждавайте на безпроблемната работа на вашата битова техника.
              </ProjectSectionText>
              <ProjectSectionText>
              Свържете се с нас днес и нека помогнем на вашите уреди да функционират отново като нови!</ProjectSectionText>
            </ProjectTextRow>
            {/* <Image
              src={sliceIrl}
              placeholder={sliceIrlPlaceholder}
              alt="Students at the University of New South Wales using the new collaborative annotation features"
            /> */}
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
