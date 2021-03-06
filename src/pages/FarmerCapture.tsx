import { IonContent, IonRow, IonCol, IonButtons, IonButton, IonHeader, IonPage, IonTitle, 
  IonToolbar , IonFab, IonInput, IonGrid, IonIcon,   IonFabButton,
  IonSelectOption, IonSelect, useIonViewDidEnter, useIonViewWillEnter, IonLabel, IonCard, IonItem, IonBackButton
} from '@ionic/react';
import { home } from 'ionicons/icons';
import { useHistory, RouteComponentProps } from 'react-router';
import React, { useState } from 'react';
import './Main.css';
import { Plugins } from '@capacitor/core';
import toast from '../toast';
import { setObject } from '../localStorage';
import { useSelector, useDispatch } from 'react-redux';
import { setReduxStoreFarmer } from '../redux/actions';


const { Storage } = Plugins;

interface FarmerCaptureProps extends RouteComponentProps<{
  bvn: string;
}>{}

  
  const FarmerCapture: React.FC<FarmerCaptureProps> = ({match}) => {

    const dispatch = useDispatch()
    const history = useHistory();
    const reduxKeys = useSelector((state: any) => state.reduxStoreKeys.allKeys)
    const reduxFarmersArr = useSelector((state: any) => state.reduxStoreFarmers.farmers)
    const redFarmer = useSelector((state: any) => state.reduxStoreFarmer.farmer)
    const [reduxFarmer, setFarma] = useState(JSON.parse(redFarmer))
    const [farmer, setFarmer] = useState()
    const [theFarmer, setTheFarmer] = useState()

    const [bvn, setBvn] = useState(match.params.bvn)
    const [f_name, setFname] = useState()
    const [sname, setSname] = useState()
    const [o_name, setOname] = useState()
    const [sex, setSex] = useState()
    const [farmer_age, setFarmerage] = useState()
    const [marriage_status, setMarriage_Status] = useState()
    const [num_of_children, setNumChildren] = useState()
    const [farmer_income, SetFarmerincome] = useState()
    const [address, setAddress] = useState()
    const [f_state, setFstate] = useState()
    const [f_lg, setFlga] = useState()
    const [f_nationality, setFnationality] = useState()
    const [f_occupation, setFoccupation] = useState()
    const [id_type, setIdtype] = useState()
    const [id_num, setIdnum] = useState()
    const [id_issue_date, setIdissuedate] = useState()
    const [exp_date, setExpdate] = useState()
    const [prev_interven, setPrevinterven] = useState()

 
 
   
    
    useIonViewWillEnter(() => {
    });
    useIonViewDidEnter(() => {
     // setFarmer(reduxFarmer)
     console.log('ionViewDidEnter event fired', farmer);
    });

    function validateInputs(){
      if ((farmer_age === "") || (marriage_status === "") || (farmer_income === "")
           || (f_nationality === "") || (f_occupation === "") || (id_type === "") 
           || (id_num === "") || (exp_date === "") || (prev_interven === "") 
           || (num_of_children === "") || (sex === "") || (address === "")) {
          
          toast('All iput fields are required', 4000);
          console.log('All input filds are required')
      } else {
        /*var tempFarmer = {
          sex: sex,
          marriage_status: marriage_status,
          farmer_age: farmer_age,
          num_of_children: num_of_children,
          farmer_income: farmer_income,
          address: address,
          f_nationality: f_nationality,
          f_occupation: f_occupation,
          id_type: id_type,
          id_num: id_num,
          exp_date: exp_date,
          prev_interven: prev_interven
        }*/
        reduxFarmer.sex = sex;
        reduxFarmer.marriage_status = marriage_status
        reduxFarmer.farmer_age = farmer_age
        reduxFarmer.num_of_children = num_of_children
        reduxFarmer.farmer_income = farmer_income
        reduxFarmer.address = address
        reduxFarmer.f_nationality = f_nationality
        reduxFarmer.f_occupation = f_occupation
        reduxFarmer.id_type = id_type
        reduxFarmer.id_num = id_num
        reduxFarmer.exp_date = exp_date
        reduxFarmer.prev_interven = prev_interven

        //const updateFarmer
        console.log('Farmer>>>', reduxFarmer)
        dispatch(setReduxStoreFarmer(reduxFarmer))
        setObject(bvn, reduxFarmer)
        //getCurrentFarmer(bvn)

      }
      
      history.replace(`/farm/${bvn}`)
    }
    

       

   
return (
    <IonPage>
      <IonHeader >
        <IonToolbar color='tertiary'>
          <IonButtons slot="start">
            <IonBackButton />
          </IonButtons>
          <IonTitle>Farmer Data</IonTitle>
        </IonToolbar>
      </IonHeader>     
      <IonContent>
      <div id="container">
      <IonFab vertical="top" horizontal="end" slot="fixed">
      <IonFabButton color="tertiary" >
        <IonIcon icon={home} title="go back" onClick={ () => history.goBack() }  />
      </IonFabButton>
    </IonFab>
      <div className="section text-center">Input Farmer's Data</div>
      <IonCard>
        
        <IonGrid  className="justify-content-center">
            <IonRow color="primary" className="ion-justify-content-between">
              <IonCol  size="6" >
                <IonItem>                  
                  <IonInput className="text-center" contentEditable={true}>
                      {(reduxFarmer) ? reduxFarmer.f_name : ''}
                  </IonInput>
                </IonItem>
              </IonCol>
              <IonCol className="" size="6" >
                <IonItem>
                  <IonInput className="text-center" contentEditable={true}>
                    {(reduxFarmer) ? reduxFarmer.sname : ''}
                  </IonInput>
                </IonItem>
              </IonCol>
            </IonRow> 

            <IonRow color="primary" className="ion-justify-content-between">
              <IonCol className="" size="6" >
                <IonItem>
                  <IonInput type="text" className="text-center" contentEditable={true} >
                    {(reduxFarmer) ?  reduxFarmer.o_name : ''}
                  </IonInput>
                </IonItem>
              </IonCol>
              <IonCol className="" size="6" >
                <IonItem>
                  <IonLabel position="floating">Age</IonLabel>
                  <IonInput  type="number"
                  onIonChange={(e: any) => setFarmerage(e.target.value)}/>
                </IonItem>
              </IonCol>
            </IonRow>

            <IonRow color="primary" className="ion-justify-content-between">
              <IonCol className="" size="6">
                <IonItem>
                  <IonLabel position="floating">Gender</IonLabel>
                  <IonSelect className="ion-select"
                    onIonChange={(e: any) => setSex(e.target.value)} >
                      <IonSelectOption value="Male">Male</IonSelectOption>
                      <IonSelectOption value="Female">Female</IonSelectOption>
                  </IonSelect>
                </IonItem>
              </IonCol>
              <IonCol className="" size="6" >
                <IonItem>
                  <IonLabel position="floating">Address</IonLabel>
                  <IonInput type="text"
                    onIonChange={(e:any)=>setAddress(e.target.value)} />
                </IonItem>
              </IonCol>
            </IonRow>

            <IonRow color="primary" className="ion-padding ion-justify-content-between">
              <IonCol className="" size="6">
                <IonItem>
                  <IonLabel position="floating">Marital Status</IonLabel>
                  <IonSelect className="ion-select"
                    onIonChange={(e: any) => setMarriage_Status(e.target.value)}>
                      <IonSelectOption value="Single">Single</IonSelectOption>
                      <IonSelectOption value="Married">Married</IonSelectOption>
                      <IonSelectOption value="Divourced">Divourced</IonSelectOption>
                  </IonSelect>
                </IonItem>
              </IonCol>
              <IonCol className="" size="6" >
                <IonItem>
                  <IonLabel position="floating">No of Childen</IonLabel>
                  <IonInput type="number"  
                  onIonChange={(e:any)=> setNumChildren(e.target.value)}></IonInput>
                </IonItem>
              </IonCol>
            </IonRow>

            <IonRow color="primary" className="ion-padding ion-justify-content-between">                  
              <IonCol className="" size="6" >
                <IonItem>
                  <IonInput type="text">
                    {(reduxFarmer) ? reduxFarmer.f_state : ''}
                  </IonInput>
                </IonItem>
              </IonCol>
              <IonCol className="" size="6" >
                <IonItem>
                  <IonLabel position="floating">Nationality</IonLabel>
                  <IonSelect className="ion-select"
                      onIonChange={(e:any)=> setFnationality(e.target.value)} >
                      <IonSelectOption value="Nigerian">Nigerian</IonSelectOption>
                      <IonSelectOption value="Other">Other</IonSelectOption>
                  </IonSelect>
                </IonItem>
              </IonCol>
            </IonRow>
            <IonRow color="primary" className="ion-padding ion-justify-content-between">
              <IonCol className="" size="6" >
                <IonItem>
                  <IonInput type="text">
                    {(reduxFarmer) ? reduxFarmer.f_lg : ''}
                  </IonInput>
                </IonItem>
              </IonCol>
              <IonCol className="" size="6" >
                <IonItem>
                  <IonInput name="bvn" type="number">
                    {(reduxFarmer) ? reduxFarmer.bvn : ''}
                  </IonInput>
                </IonItem>
              </IonCol>
            </IonRow>
            <IonRow color="primary" className="ion-padding ion-justify-content-between">
              <IonCol size="6" >
                <IonItem>
                  <IonLabel position="floating">Select ID Type</IonLabel>
                  <IonSelect className="ion-select" 
                    onIonChange={(e:any)=> setIdtype(e.target.value)} >
                    <IonSelectOption value="PVC">PVC</IonSelectOption>
                    <IonSelectOption value="NIMC">NIMC</IonSelectOption>
                    <IonSelectOption value="IP">IP</IonSelectOption>
                    <IonSelectOption value="DL">Driver License</IonSelectOption>
                  </IonSelect>
                  </IonItem>
              </IonCol>
              <IonCol className="" size="6" >
                <IonItem>
                  <IonLabel position="floating">ID Number</IonLabel>
                  <IonInput type="number"
                  onIonChange={(e:any)=> setIdnum(e.target.value)} />
                </IonItem>
              </IonCol>
            </IonRow>

            <IonRow color="primary" className="ion-padding ion-justify-content-between">
              <IonCol className="" size="6" >
                <IonItem>
                  <IonLabel position="floating">ID Exp. Date</IonLabel>
                  <IonInput name="expiry_date" type="date"  
                  onIonChange={(e:any)=> setExpdate(e.target.value)} />
                </IonItem>
              </IonCol>
              <IonCol className="" size="6" >
                <IonItem>
                  <IonLabel position="floating">Current Income</IonLabel>
                  <IonInput name="current_income" type="number"
                  onIonChange={(e:any)=>SetFarmerincome(e.target.value)} />
                </IonItem>
              </IonCol>
            </IonRow>
            <IonRow color="primary" className="ion-padding ion-justify-content-between">
              <IonCol className="" size="6" >
                <IonItem>
                  <IonLabel position="floating">Alt. Occupation</IonLabel>
                  <IonInput 
                    onIonChange={(e:any)=> setFoccupation(e.target.value)} />
                </IonItem>
              </IonCol>
              <IonCol className="" size="6" >
                <IonItem>
                  <IonLabel position="floating">Prev. Interventions</IonLabel>
                  <IonInput name="previous_interventions"
                    onIonChange={(e:any)=>setPrevinterven(e.target.value)} />
                </IonItem>
              </IonCol>
            </IonRow>
            <IonRow color="primary" className="ion-padding ion-justify-content-between">
                <IonButton  color="tertiary" fill="outline" className="round-btn" type="submit" 
                    expand="block" onClick={validateInputs}>Next</IonButton>
            </IonRow>
        </IonGrid>        
      </IonCard>
    </div>
  </IonContent>
</IonPage>
   );
};

export default FarmerCapture;
