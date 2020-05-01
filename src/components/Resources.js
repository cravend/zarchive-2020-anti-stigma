/** @jsx jsx */
import React from 'react'
import { jsx, Box, Grid, Heading, Text } from 'theme-ui'
import Link from '../components/Link'

const Resources = () => (
  <div>
    <Grid gap={25} columns={[1, null, 2]}>
      <StudentOrganizations />
      <StudentHealthServices />
      <SupportTrainings />
      <CounselingServices />
    </Grid>
  </div>
)

const CrisisResources = () => (
  <div>
    <Heading
      variant="resource"
      sx={{ color: 'secondary', pt: [null, null, 0] }}
    >
      Crisis Resources
    </Heading>
    <Grid gap={25} columns={[1, null, 2]}>
      <Resource
        name="National Suicide Prevention Lifeline"
        description={
          <>
            <Link to="tel:8002738255">(800) 273-8255</Link> — The National
            Suicide Prevention Lifeline provides 24/7, free and confidential
            support for people in distress.
          </>
        }
        link="https://suicidepreventionlifeline.org/chat/"
      />
      <Resource
        name="CAMHC Emergency Services"
        description={
          <>
            <Link to="tel:8038988888">(803) 898-8888</Link> — Clinic open 8:30
            a.m. to 5:00 p.m, staff on-call for emergencies 24 hours/day
          </>
        }
        link="https://scaccess.communityos.org/zf/profile/program/id/733775"
      />
      <Resource
        name="SAMHSA National Hotline"
        description={
          <>
            <Link to="tel:8006624357">(800) 662-4357</Link> — A free,
            confidential, 24/7/365 treatment referral and information service
            (in English and Spanish) for individuals and families facing mental
            and/or substance use disorders.
          </>
        }
        link="https://www.samhsa.gov/find-help/national-helpline"
      />
      <Resource
        name="National Alliance on Mental Health (NAMI)"
        description={
          <>
            <Link to="tel:8009506264">(800) 950-6264</Link> or{' '}
            <Link to="sms://741741?&body=NAMI">text "NAMI" to 741741</Link> for
            crisis support. The link provides guides on how to plan for a mental
            health crisis
          </>
        }
        link="https://www.nami.org/About-NAMI/Publications-Reports/Guides/Navigating-a-Mental-Health-Crisis"
      />
      <Resource
        name="NAMI — What to do in a Crisis Infographic"
        description="A single-page infographic on common how to handle a mental health emergency."
        link="https://www.nami.org/NAMI/media/NAMI-Media/Infographics/crisis%20guide/What-to-Do-in-a-Mental-Health-Crisis.pdf"
      />
    </Grid>
  </div>
)

const Resource = ({ name, description, link }) => (
  <Box pb={2}>
    <Heading as="h4">
      <Link to={link}>{name}</Link>
    </Heading>
    <Text>{description}</Text>
  </Box>
)

const StudentOrganizations = () => (
  <div>
    <Heading
      variant="resource"
      sx={{ color: 'secondary', pt: [null, null, 0] }}
    >
      Student Organizations
    </Heading>
    <Resource
      name="Mental Health Ambassadors"
      description="Headed by Dr. April Scott, this program trains in mental health first-aid. They go to different student organizations to explain the mental health resources on-campus and how to get involved."
    />
    <Resource
      name="Changing Carolina Peer Leaders"
      description="Undergraduate leaders from a variety of backgrounds and academic disciplines who have a passion for wellness and health education. They give presentations and organize initiatives and events across campus. They're involved in a wide variety of health topics that are important to their peers."
      link="https://sc.edu/about/offices_and_divisions/student_health_services/wellness-prevention/get-involved/changing-carolina-peer-leaders/index.php"
    />
  </div>
)

const StudentHealthServices = () => (
  <div>
    <Heading
      variant="resource"
      sx={{ color: 'secondary', pt: [null, null, 0] }}
    >
      Student Health Services
    </Heading>
    <Resource
      name="Wellness Coaching"
      description="The wellness coaching program provides education, support, and encouragement to help in the following areas: balanced eating, physical activity, stress management, sleep, tobacco treatment, or resiliency."
      link="https://sc.edu/about/offices_and_divisions/student_health_services/wellness-prevention/stress-management/calm-oasis-space/index.php"
    />
    <Resource
      name="C.A.L.M. Oasis"
      description="A space for guided or individual mindness and meditation"
      link="https://sc.edu/about/offices_and_divisions/student_health_services/wellness-prevention/stress-management/calm-oasis-space/index.php"
    />
    <Resource
      name="Stress Management"
      description="Individualized help finding stressors and techniques to decrease stress."
      link="https://sc.edu/about/offices_and_divisions/student_health_services/wellness-prevention/stress-management/index.php"
    />
  </div>
)

const SupportTrainings = () => (
  <div>
    <Heading variant="resource" sx={{ color: 'secondary' }}>
      Support Trainings
    </Heading>
    <Resource
      name="Kognito"
      description="Kognito is an online training that any student can complete to receive a certificate. They train you how to identify psychological distress in others."
      link="https://sc.edu/about/offices_and_divisions/student_health_services/medical-services/counseling-and-psychiatry/online-support/index.php"
    />
    <Resource
      name="Stand Up Carolina Bystander Intervention Training"
      description="This training allows students to engage in a group discussion about overcoming personal and societal barriers to bystander intervention."
    />
    <Resource
      name="Supporting a Survivor — Beginning to End"
      description="This course will cover how to support a survivor, both students and faculty/staff, from the moment they start to disclose through the end of the process the survivor chooses."
    />
    <Resource
      name="Intimate Partner Violence Info Session"
      description="The Associate Director of SAVIP delivers this training which covers definitions of intimate partner violence "
    />
    <Resource
      name="Trauma 101"
      description="With the goal of creating a more trauma-informed and responsive campus, experts from Student Health Services discuss the neurobiological underpinnings of trauma and introduce a new way to define the process of becoming flooded with overwhelming stress from a variety of causes."
    />
  </div>
)

const CounselingServices = () => (
  <div>
    <Heading variant="resource" sx={{ color: 'secondary' }}>
      Counseling Services
    </Heading>
    <Grid columns={[1, null, 2]}>
      <Box>
        <Heading sx={{ pt: 3, pb: 0 }} as="h3">
          Outpatient Treatment
        </Heading>
        <Resource
          name="Three Rivers"
          description="Outpatient treatment limited to adults."
          link="https://threeriversbehavioral.org/programs-services/"
        />
        <Resource
          name="Palmetto Health"
          description="Services for adults and adolescents. Specialities: Mood disorders, Substance-abuse disorders, Co-occurring disorders."
          link="https://www.palmettohealth.org/medical-services/behavioral-care/"
        />
        <Resource
          name="Columbia Area Mental Health Center"
          description="Wide range of programs for all ages."
          link="https://www.state.sc.us/dmh/camhc/index.html"
        />
        <Resource
          name="Future Psych Solutions"
          description="Services for adults and adolescents."
          link="https://futurepsychsolutions.com"
        />
        <Resource
          name="Lake Psychological Services"
          description="Wide-ranging services for adults, adolescents, and children (5 years & older)."
          link="http://lakepsych.com"
        />
        <Resource
          name="Rhea A. Merck, PHD"
          description="Services for adults and adolescents. Specialities: Eating disorders, Life transitions, Marital Therapy, Athletes."
          link="http://www.ramphd.com/services.html"
        />
      </Box>
      <Box>
        <Heading sx={{ pt: 3, pb: 0 }} as="h3">
          Inpatient Treatment
        </Heading>
        <Resource
          name="Three Rivers"
          description="Services for adults and adolescents. Specialities: Drug abuse, Trauma recovery for military and first responders."
          link="https://threeriversbehavioral.org/programs-services/"
        />
        <Resource
          name="Palmetto Health"
          description="Quick transfer to outpatient treatment. Services for adults and adolescents. Specialities: Addiction Recovery."
          link="https://www.palmettohealth.org/medical-services/behavioral-care/"
        />
        <Resource
          name="Columbia Area Mental Health Center"
          description="Wide range of programs for adults."
          link="https://www.state.sc.us/dmh/camhc/index.html/"
        />
        <Heading sx={{ pt: 3, pb: 0 }} as="h3">
          On-Campus
        </Heading>
        <Resource
          name="Online Counseling"
          link="https://thepath.taoconnect.org/local/login/index.php"
        />
        <Resource
          name="In-Person Counseling & Psychiatry"
          link="https://sc.edu/about/offices_and_divisions/student_health_services/medical-services/counseling-and-psychiatry/"
        />
        <Resource
          name="Group Counseling"
          link="https://sc.edu/about/offices_and_divisions/student_health_services/medical-services/counseling-and-psychiatry/group-counseling/index.php"
        />
      </Box>
    </Grid>
  </div>
)

export default Resources
export { CrisisResources }
