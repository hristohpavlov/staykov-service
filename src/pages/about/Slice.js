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

const title = 'Стайков Сървис';
const description =
  `Професионален ремонт на битова техника в град Пловдив - Стайков Сървис - Вашето доверие за перфектни резултати!\xa0 Имате нужда от ремонт на вашата битова техника?\xa0 Възложете го на нас - Стайков Сървис, вашият надежден партньор в град Пловдив! Нашият обхват на ремонт включва:`;
const roles = ['Перални машини', 'Съдомиялни машини', 'Готварски печки и фурни', 'Отоплителни уреди', 'Хладилна техника'];

export const About = () => {
  return (
    <Fragment>
      <Meta title={title} prefix="Стайков Сървис" description={description} />
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
              <ProjectSectionHeading>За нас</ProjectSectionHeading>
              <ProjectSectionText>
              Ние сме специализирана фирма в областта на ремонта на разнообразна битова техника. Нашата екипировка от опитни и квалифицирани техници е готова да ви помогне с прецизност и професионализъм. <br/><br/> Имате нужда от ремонт на вашата битова техника? Възложете го на нас - Стайков Сървис, вашият надежден партньор в град Пловдив!
              </ProjectSectionText>
            </div>
            <div className={styles.sidebarImages}>
              {/* <Image
                className={styles.sidebarImage}
                srcSet={[sliceSidebarLayers, sliceSidebarLayersLarge]}
                placeholder={sliceSidebarLayersPlaceholder}
                alt="The layers sidebar design, now with user profiles."
                sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
              />
              <Image
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
              <ProjectSectionHeading>Обслужване и ремонт на място</ProjectSectionHeading>
              <ProjectSectionText>
              Ние разбираме колко важна е битовата техника за вашата ежедневна рутина и се стремим да я възстановим възможно най-бързо. Висококачественото обслужване и задоволството на нашите клиенти са ни от първостепенно значение. 
             </ProjectSectionText>
             <ProjectSectionText>
             Също така, разбираме, че удобството и комфортът ви са от съществено значение, затова предлагаме ремонт на място - ние ще дойдем до вас, за да извършим необходимия ремонт, без да се налага да транспортирате уреда до нас.
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
              <div className={styles.gridBackground}>
                {/* <Image
                  srcSet={[sliceBackgroundBar, sliceBackgroundBarLarge]}
                  placeholder={sliceBackgroundBarPlaceholder}
                  alt=""
                  role="presentation"
                  sizes={`(max-width: ${media.mobile}px) 312px, (max-width: ${media.tablet}px) 408px, 514px`}
                /> */}
              </div>
              <div className={styles.gridForeground}>
                {/* <Image
                  srcSet={[sliceAnnotation, sliceAnnotationLarge]}
                  placeholder={sliceAnnotationPlaceholder}
                  alt="An annotation preview popover with statistics for shape perimeter and area."
                  sizes={`(max-width: ${media.mobile}px) 584px, (max-width: ${media.tablet}px) 747px, 556px`}
                /> */}
              </div>
            </div>
            <div className={styles.gridText}>
              <ProjectSectionHeading>Какво може да очаквате</ProjectSectionHeading>
              <ProjectSectionText>
              Когато избирате Стайков Сървис, можете да очаквате:
              <br/>
              - Бърз и надежден ремонт на битова техника
              <br/>
              - Експертно знание и опитни техници
              <br/>
              - Използване на качествени резервни части
              <br/>
              - Конкурентни цени и прозрачност във всички финансови аспекти
              <br/>
              - Лично обслужване и внимание към вашите нужди
              </ProjectSectionText>
            </div>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>За връзка</ProjectSectionHeading>
              <ProjectSectionText>
              За да научите повече за нас и да запишете своят час за ремонт, моля, свържете се с нас на следния телефонен номер: 0893957277.
              </ProjectSectionText>
              <ProjectSectionText>
              Ние с нетърпение очакваме да ви помогнем
              </ProjectSectionText>
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
